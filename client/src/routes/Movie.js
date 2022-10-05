import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const {id} =  useParams()
  
  return <div>{id}</div>;
}

export default Movie;
