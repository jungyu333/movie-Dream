import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMoiveReview(queryParams, callback) {
  let query = queryParams.movie_id;
  let size = typeof queryParams.size !== 'undefined' ? queryParams.size : 10;
  let page = typeof queryParams.page !== 'undefined' ? queryParams.page : 1;

  //return Value
  let responseData = {};

  const requestBody = new esb.requestBodySearch();

  const bodyData = requestBody
    .query(esb.matchQuery('movie_id', query))
    .size(10)
    .toJSON();

  const response = await es.search({
    index: common.ES_REVIEW_INDEX,
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

  const hits = [];

  for (const hit of response.body.hits.hits) {
    hits.push(hit._source);
  }

  responseData['review'] = sourceList;

  callback(false, responseData);
}
