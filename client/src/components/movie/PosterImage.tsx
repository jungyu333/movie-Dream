import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import React from 'react';

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  image-rendering: auto;
  max-width: 173px;
  @media ${({ theme }) => theme.device.smallTablet} {
    object-fit: cover;
    height: 90%;
    max-width: 173px;
  }
`;

const NoPoster = styled.img`
  height: 20vh;
  max-width: 173px;
  min-height: 250px;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
  }
`;

function PosterImage() {
  const { movie } = useSelector((state: RootState) => state.movie);

  return (
    <>
      {movie?.movie.movie_poster ? (
        <Image src={movie.movie.movie_poster} alt="poster" />
      ) : (
        <NoPoster src="/Noimage.jpeg" alt="poster" />
      )}
    </>
  );
}

export default PosterImage;
