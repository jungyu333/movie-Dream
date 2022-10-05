import React from 'react';
import { useParams } from 'react-router-dom';
import ContentBox from '../components/movie/Contentbox';
import Imagebox from '../components/movie/Imagebox';
import Infobox from '../components/movie/Infobox';

function Movie() {
  //const { id } = useParams();

  return (
    <>
      <Imagebox />
      <Infobox />
      <ContentBox />
    </>
  );
}

export default Movie;
