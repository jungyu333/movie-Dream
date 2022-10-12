import es from "../lib/elasticsearch.js";
import common from "../static/commonStatic.js";
import esb from "elastic-builder";

export default async function getMoives(queryParams, callback) {
  let query = queryParams.query;
  let size = queryParams.size;
  let page = queryParams.page;
  let sort = queryParams.sort;
  let scroll_data = [];

  //filter
  let genreFilter = queryParams.genreFilter;
  let nationFlag = queryParams.nationFlag;

  const requestBody = new esb.requestBodySearch();
  const boolQuery = new esb.boolQuery();
  //genrefilter
  if (typeof genreFilter !== "undefined") {
    const genreBoolQuery = new esb.boolQuery();
    let genreFilterList = genreFilter.split(",");
    for (const genre of genreFilterList) {
      genreBoolQuery.should(esb.matchQuery("genre", genre));
    }
    boolQuery.must(genreBoolQuery);
  }

  if (typeof nationFlag !== "undefined") {
    if (nationFlag === "True") {
      boolQuery.must(esb.matchQuery("nation", "한국"));
    } else {
      boolQuery.mustNot(esb.matchQuery("nation", "한국"));
    }
  }

  //movie_query
  //const queryBuilder = new esb.MatchQuery('h_movie', query);
  boolQuery.must(esb.matchQuery("h_movie", query));
  const bodyData = requestBody
    .query(boolQuery)
    .agg(esb.termsAggregation("genre", "genre"))
    .size(10000)
    .sort(esb.sort(sort, "asc"))
    .toJSON();

  console.log(JSON.stringify(bodyData));

  const response = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: bodyData,
    scroll: "30s",
  });

  let aggGenre = response.body.aggregations.genre.buckets;
  let responseData = {};
  responseData["genre"] = aggGenre;

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
        scroll: "10s",
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

  responseData["movies"] = sourceList;

  callback(false, responseData);
}
