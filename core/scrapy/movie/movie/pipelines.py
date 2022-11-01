from asyncio.log import logger
from json import dumps
from functools import partial
from .util.esUtil import ElasticsearchUtil

from kafka.client_async import KafkaClient
from kafka.producer import KafkaProducer


class KafkaPipeline(object):
    def __init__(self, producer, topic):
        self.producer = producer
        
    def process_item(self, item, spider):
        item = dict(item)
        item['spider'] = spider.name
        movie_id = item['movie_id']
        try:
            future = None
            if not item.get('exception'):
                if item.get('review_id'):
                    #insert review
                    future = self.producer.send('review01', item).add_callback(self.on_send_success)
                else:
                    #insert movie
                    future = self.producer.send('movie01', item).add_callback(self.on_send_success)
                    
                record_metadata = future.get(5000)
                
                if not record_metadata:
                    raise Exception
            else:
                pass
                #print(item.get('exception'))
        except Exception as e:
            logger.log(e)
        else:
            pass
            ElasticsearchUtil.crwl_delete_movie_id(movie_id)
        
        
    def on_send_success(self, record_metadata):
        pass
        

    def close_spider(self, spider):
        self.producer.flush()   

    @classmethod
    def from_settings(cls, settings):
        topic = settings.get('KAFKA_PRODUCER_MOVIE_TOPIC', 'movie01')
        producer = KafkaProducer(acks=0, compression_type='gzip', bootstrap_servers=['localhost:9092'],
                         value_serializer=lambda x: dumps(x).encode('utf-8'))
        
        return cls(producer, topic)