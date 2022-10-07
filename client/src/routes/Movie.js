import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewBox from '../components/movie/Reviewbox';
import Imagebox from '../components/movie/Imagebox';
import WordCloudBox from '../components/movie/Wordcloudbox';

function Movie() {
  //const { id } = useParams();

  return (
    <>
      <div>
        <Imagebox />
      </div>
      <ReviewBox />
      <WordCloudBox />
    </>
  );
}

export default Movie;
