import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function crwlMovie(queryParams, callback) {
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


  const total = response.body.hits.total.value;

  if (total > 0) {
    responseData['status'] = 'Sucess';
  }else {
    await es.index({
      index: common.ES_CRWL_INDEX,
      id: query,
      body: {"movie_id" : query}
    });
    responseData['status'] = 'Crwling....';
  }


  callback(false, responseData);
}
