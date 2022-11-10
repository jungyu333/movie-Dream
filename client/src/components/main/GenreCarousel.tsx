import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Carousel from '../common/Carousel';
import { IGenreMovie } from '../../@types/main';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 70%;
  z-index: 3;
`;

function GenreCarousel() {
  const { genreMoviesLoading, genreMovies } = useSelector(
    (state: RootState) => state.main,
  );
  return (
    <Wrapper>
      {!genreMoviesLoading && (
        <>
          {genreMovies!.map((movie: IGenreMovie, index: number) => (
            <Carousel key={index} title={movie.genre} movies={movie.movies} />
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default GenreCarousel;
