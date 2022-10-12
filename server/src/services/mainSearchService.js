import es from "../lib/elasticsearch.js";
import common from "../static/commonStatic.js";
import esb from 'elastic-builder';

export default async function getMoives(queryParams, callback) {

  let query = queryParams.query;
  let size = queryParams.size;
  let page = queryParams.page;
  let sort = queryParams.sort;
  let scroll_data = [];

  const requestBody = new esb.requestBodySearch();
  //const queryBuilder = new esb.matchAllQuery();
  const queryBuilder = new esb.MatchQuery('h_movie', query);
  const bodyData = requestBody.query(queryBuilder)
                              .size(10000)
                              .sort(esb.sort(sort, 'asc'))
                              .toJSON();

  const response = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: bodyData,
    scroll: '30s'
  });

  const responseQueue = [];
  let counter = 0;
  
  responseQueue.push(response);
  while(responseQueue.length) {
    const { body } = responseQueue.shift();

    counter += body.hits.hits.length;
    for(const hit of body.hits.hits) {
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
    )
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

  callback(false, sourceList);
}
