import es from '../../lib/elasticsearch.js';
import common from '../../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovieNamesAuto(queryParams, callback) {
    autoSearch(queryParams).then(function (res) {
        const autoMovies = [];
        for (const hit of res.body.hits.hits) {
            autoMovies.push(hit._source);
        }
        callback(false, autoMovies);
    });
}

async function autoSearch(queryParams) {
    const query = queryParams.query;
    const size =
        typeof queryParams.size !== 'undefined' ? queryParams.size : 10;

    const requestBody = new esb.requestBodySearch();
    const bodyData = requestBody
        .query(esb.matchQuery('h_movie', query))
        .size(parseInt(size))
        .toJSON();

    const response = await es.search({
        index: common.ES_MOVIE_AUTO_INDEX,
        body: bodyData
    });

    return response;
}
