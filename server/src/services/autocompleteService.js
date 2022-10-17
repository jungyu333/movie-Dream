import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovieNamesAuto(queryParams, callback) {
  let query = queryParams.query;
  let size = queryParams.size;

  const requestBody = new esb.requestBodySearch();
  const bodyData = requestBody
    .query(esb.matchQuery('h_movie', query))
    .size(parseInt(size))
    .toJSON();

  const response = await es.search({
    index: common.ES_MOVIE_AUTO_INDEX,
    body: bodyData
  });

  const autoMovies = [];
  for (const hit of response.body.hits.hits) {
    autoMovies.push(hit._source);
  }

  callback(false, autoMovies);
}
