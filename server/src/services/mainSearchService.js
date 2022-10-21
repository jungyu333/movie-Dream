import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovies(queryParams, callback) {
  let query = queryParams.query;
  let size = typeof queryParams.size !== 'undefined' ? queryParams.size : 10;
  let page = typeof queryParams.page !== 'undefined' ? queryParams.page : 1;
  let sort =
    typeof queryParams.sort !== 'undefined' ? queryParams.sort : 'score_avg';

  //return Value
  let responseData = {};

  //filter
  let genreFilter = queryParams.genreFilter;
  let nationFlag = queryParams.nationFlag;

  //rangeFilter showtime, openingdate
  let showTimeFilter = queryParams.showTimeFilter;
  let openDateFilter = queryParams.openDateFilter;


  //poster script query
  const scriptQuery = esb.scriptQuery(
    esb.script()
      .lang('painless')
      .inline('int poster = doc["movie_poster.keyword"].value.length();return poster > 0;')
  );

  //상단 영화 고정
  const topBoolQuery = new esb.boolQuery();
  topBoolQuery.must([esb.matchAllQuery(), esb.existsQuery('movie_poster')])
              .filter(scriptQuery)

  //평점순
  const requestTopScoreBody = new esb.requestBodySearch();
  const topScoreData = requestTopScoreBody
    .query(topBoolQuery)
    .sort(esb.sort('score_avg', 'desc'))
    .size(10)
    .toJSON();

  const topScoreResponse = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: topScoreData
  });

  const topScoreMovies = [];
  for (const hit of topScoreResponse.body.hits.hits) {
    let sourceData = {};
    sourceData['movie_id'] = hit._source.movie_id;
    sourceData['h_movie'] = hit._source.h_movie;
    sourceData['movie_poster'] = hit._source.movie_poster;
    topScoreMovies.push(sourceData);
  }

  responseData['top_score_movie'] = topScoreMovies;

  //개봉순
  const requestTopOpenBody = new esb.requestBodySearch();
  const topOpenData = requestTopOpenBody
    .query(topBoolQuery)
    .sort(esb.sort('opening_date', 'desc'))
    .size(10)
    .toJSON();

  const topOpenResponse = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: topOpenData
  });

  const topOpenMovies = [];
  for (const hit of topOpenResponse.body.hits.hits) {
    let sourceData = {};
    sourceData['movie_id'] = hit._source.movie_id;
    sourceData['h_movie'] = hit._source.h_movie;
    sourceData['movie_poster'] = hit._source.movie_poster;
    topOpenMovies.push(sourceData);
  }

  responseData['top_open_movie'] = topOpenMovies;

  //genre 태그 고정
  const requestSubBody = new esb.requestBodySearch();
  const subData = requestSubBody
    .query(esb.matchQuery('h_movie', query))
    .agg(esb.termsAggregation('genre', 'genre'))
    .size(0)
    .toJSON();

  const subResponse = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: subData
  });

  //aggregation
  let aggGenre = subResponse.body.aggregations.genre.buckets;
  responseData['genre'] = aggGenre;

  //filter Query
  const requestBody = new esb.requestBodySearch();
  const boolQuery = new esb.boolQuery();
  //genrefilter

  if (
    typeof genreFilter !== 'undefined' &&
    genreFilter !== 'null' &&
    genreFilter.trim() !== ''
  ) {
    const genreBoolQuery = new esb.boolQuery();
    let genreFilterList = genreFilter.split(',');
    for (const genre of genreFilterList) {
      genreBoolQuery.should(esb.matchQuery('genre', genre));
    }
    boolQuery.must(genreBoolQuery);
  }
  //nation
  if (
    typeof nationFlag !== 'undefined' &&
    nationFlag !== (null || '') &&
    nationFlag.trim() !== ''
  ) {
    if (nationFlag === 'True') {
      boolQuery.must(esb.matchQuery('nation', '한국'));
    } else if (nationFlag === 'False') {
      boolQuery.mustNot(esb.matchQuery('nation', '한국'));
    }
  }

  //range showtime

  if (
    typeof showTimeFilter !== 'undefined' &&
    showTimeFilter !== ('null' || '') &&
    showTimeFilter.trim() !== ''
  ) {
    let showTimeRange = showTimeFilter.split(',');
    let showTimeFrom = showTimeRange[0];
    let showTimeTo = showTimeRange[1];

    boolQuery.must(
      esb.rangeQuery('show_time').gte(showTimeFrom).lte(showTimeTo)
    );
  }

  //range opendate
  if (
    typeof openDateFilter !== 'undefined' &&
    openDateFilter !== (null || '') &&
    openDateFilter.trim() !== ''
  ) {
    let openDateRange = openDateFilter.split(',');
    let openDateFrom = openDateRange[0];
    let openDateTo = openDateRange[1];

    boolQuery.must(
      esb.rangeQuery('opening_date').gte(openDateFrom).lte(openDateTo)
    );
  }

  //movie_query_filter적용
  boolQuery.must(esb.matchQuery('h_movie', query));
  const bodyData = requestBody
    .query(boolQuery)
    .agg(esb.termsAggregation('genre', 'genre'))
    .size(10000)
    .sort(esb.sort(sort, 'desc'))
    .toJSON();

  const response = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: bodyData,
    scroll: '30s'
  });

  //scroll
  let scroll_data = [];
  const responseQueue = [];
  let counter = 0;

  responseQueue.push(response);
  while (responseQueue.length) {
    const { body } = responseQueue.shift();

    counter += body.hits.hits.length;
    for (const hit of body.hits.hits) {
      scroll_data.push(hit);
    }

    if (body.hits.total.value === counter) {
      break;
    }

    responseQueue.push(
      await es.scroll({
        scrollId: body._scroll_id,
        scroll: '10s'
      })
    );
  }

  let end = page * size;
  let start = end - size + 1;
  let sourceList = [];
  let no = 1;

  for (const hit of scroll_data) {
    if (no > end) {
      break;
    }
    if (no < start) {
      no++;
      continue;
    }

    no++;
    sourceList.push(hit._source);
  }
  //scroll end

  responseData['movies'] = sourceList;

  callback(false, responseData);
}
