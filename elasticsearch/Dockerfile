ARG ELK_VERSION


FROM docker.elastic.co/elasticsearch/elasticsearch:${ELK_VERSION}



WORKDIR /usr/share/elasticsearch/bin

RUN elasticsearch-plugin install --batch analysis-nori
RUN elasticsearch-plugin install https://github.com/jungyu333/jaso_plugin/raw/0695894e8362025a92b6bd718afc3f631c2b28cb/jaso-analyzer-plugin-7.9.2-plugin.zip


WORKDIR /usr/share/elasticsearch/config
COPY /config/userdic.txt .
COPY /config/synonym.txt .