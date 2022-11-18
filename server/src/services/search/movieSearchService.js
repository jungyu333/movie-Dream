import es from '../../lib/elasticsearch.js';
import common from '../../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovie(queryParams, callback) {
    const res = await movieSearch(queryParams);

    //return Value
    let responseData = {};
    const total = res.body.hits.total.value;
    const hit = res.body.hits.hits[0];

    if (total === 0) {
        responseData['movie'] = [];
        responseData['graph'] = [];
        responseData['word_cloud'] = [];
        callback(false, responseData);
        return false;
    }

    responseData['movie'] = res.body.hits.hits[0]._source;

    callback(false, responseData);
}

async function movieSearch(queryParams) {
    let query = queryParams.movie_id;
    const requestBody = new esb.requestBodySearch();
    const bodyData = requestBody
        .query(esb.matchQuery('movie_id', query))
        .size(1)
        .toJSON();

    const response = await es.search({
        index: common.ES_MOVIE_INDEX,
        body: bodyData
    });

    return response;
}
