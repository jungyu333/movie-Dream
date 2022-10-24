import es from '../../lib/elasticsearch.js';
import common from '../../static/commonStatic.js';
import esb from 'elastic-builder';
import { esScrollData, esDataPaging } from '../../util/esUtil.js';

export default async function getMoiveReview(queryParams, callback) {
    //return Value
    let responseData = {};
    //Query
    movieReviewSearch(queryParams).then(function (res) {
        //scroll
        const scroll_data = esScrollData(res);
        scroll_data.then(function (data) {
            //paging
            const sourceList = esDataPaging(queryParams, data);
            responseData['review'] = sourceList;
            callback(false, responseData);
        });
    });
}

async function movieReviewSearch(queryParams) {
    const requestBody = new esb.requestBodySearch();
    const bodyData = requestBody
        .query(esb.matchQuery('movie_id', queryParams.movie_id))
        .size(10)
        .toJSON();

    const response = await es.search({
        index: common.ES_REVIEW_INDEX,
        body: bodyData,
        scroll: '30s'
    });

    return response;
}
