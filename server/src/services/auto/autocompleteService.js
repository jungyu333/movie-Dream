import es from '../../lib/elasticsearch.js';
import common from '../../static/commonStatic.js';
import esb from 'elastic-builder';

export default async function getMovieNamesAuto(queryParams, callback) {
    const autoMovies = [];
    if (
        typeof queryParams.query === 'undefined' ||
        queryParams.query.trim() === ''
    ) {
        callback(false, autoMovies);
        return false;
    }

    autoSearch(queryParams).then(function (res) {
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

    var enPattern = /[a-zA-Z]/;
    var koPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    const requestBody = new esb.requestBodySearch();
    const sortScript = esb.sort().type('number').order('asc');
    const boolQuery = esb.boolQuery();

    if (koPattern.test(query)) {
        boolQuery.must(esb.matchQuery('h_movie', query));
        sortScript.script(
            esb
                .script()
                .lang('painless')
                .inline(
                    'if(doc["h_movie3.keyword"].size() != 0){if(params.movie_name == doc["h_movie3.keyword"].value) { return 0;}} return 100000;'
                )
                .params({ movie_name: query })
        );
    }
    if (enPattern.test(query)) {
        boolQuery.must(esb.matchQuery('h_movie2', query));
        sortScript.script(
            esb
                .script()
                .lang('painless')
                .inline(
                    'if(doc["h_movie4.keyword"].size() != 0){if(params.movie_name == doc["h_movie4.keyword"].value) { return 0;}} return 100000;'
                )
                .params({ movie_name: query })
        );
    }
    const bodyData = requestBody
        .query(boolQuery)
        .size(parseInt(size))
        .sort(sortScript)
        .toJSON();

    const response = await es.search({
        index: common.ES_MOVIE_AUTO_INDEX,
        body: bodyData
    });

    return response;
}
