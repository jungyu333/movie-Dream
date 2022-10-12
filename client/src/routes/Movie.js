import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewBox from '../components/movie/Reviewbox';
import Imagebox from '../components/movie/Imagebox';
import WordCloudBox from '../components/movie/Wordcloudbox';
import Layout from '../components/common/Layout';

function Movie() {
  //const { id } = useParams();

  return (
    <>
      <Layout isNavSearch={true} isMain={false} />
      <div>
        <Imagebox />
      </div>
      <ReviewBox />
      <WordCloudBox />
    </>
  );
}

export default Movie;
