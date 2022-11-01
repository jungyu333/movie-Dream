import elasticsearch
from elasticsearch import Elasticsearch, exceptions

class ElasticsearchUtil():
    
    def __str__(self):
        return ""
    
    def crwl_delete_movie_id(id):
        es_client = Elasticsearch('http://localhost:9200')
        
        body = {
                "query": {
                    "match": {
                    "movie_id": id
                    }
                }
                }
        
        try:
            es_client.delete_by_query(index='crwl_movie', body=body)
        except elasticsearch.exceptions.ConflictError:
            pass
        except Exception as e:
            raise Exception
            
    
    def get_es_data_scrollAPI(index):

        es_client = Elasticsearch('http://localhost:9200')


        resp = es_client.search(
                index= index,
                body={
                    "size": 100,
                    "query": {
                        "match_all": {}
                    }
                },
                scroll='1s'
            )
        old_scroll_id = resp['_scroll_id']

        result = []

        for doc in resp['hits']['hits']:
            result.append(doc['_source']['movie_id'])

        while len(resp['hits']['hits']):
            es_client.info
            resp = es_client.scroll(
                scroll_id=old_scroll_id,
                scroll='1s' 
            )
            old_scroll_id = resp['_scroll_id']
            for doc in resp['hits']['hits']:
                result.append(doc['_source']['movie_id'])

        #clear scroll
        es_client.clear_scroll(scroll_id=old_scroll_id)
    
        return result