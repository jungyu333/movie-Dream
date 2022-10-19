import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovie(queryParams, callback) {
  let query = queryParams.movie_id;

  //return Value
  let responseData = {};

  const requestBody = new esb.requestBodySearch();

  const bodyData = requestBody
    .query(esb.matchQuery('movie_id', query))
    .size(1)
    .toJSON();

  const response = await es.search({
    index: common.ES_MOVIE_INDEX,
    body: bodyData
  });

  const hit = response.body.hits.hits[0];

  responseData['movie'] = hit._source;

  callback(false, responseData);
}
