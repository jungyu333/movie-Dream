import es from '../lib/elasticsearch.js';
import common from '../static/commonStatic.js';
import esb from 'elastic-builder';

export async function getGenreList() {
    //genre
    const requestSubBody = new esb.requestBodySearch();
    const bodyData = requestSubBody
        .agg(esb.termsAggregation('genre', 'genre'))
        .size(0)
        .toJSON();

    const response = await es.search({
        index: common.ES_MOVIE_INDEX,
        body: bodyData
    });

    return response;
}

export async function esScrollData(response) {
    const scroll_data = [];
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
    return scroll_data;
}

export function esDataPaging(queryParams, data) {
    const size =
        typeof queryParams.size !== 'undefined' ? queryParams.size : 10;
    const page = typeof queryParams.page !== 'undefined' ? queryParams.page : 1;
    const end = page * size;
    const start = end - size + 1;
    const sourceList = [];
    let no = 1;
    for (const hit of data) {
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

    return sourceList;
}
