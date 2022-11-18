import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import PosterImage from './PosterImage';
import React from 'react';

const Wrapper = styled.div<{ url: string }>`
  display: flex;
  border-radius: 10px;
  justify-content: center;
  min-height: 290px;
  min-width: 200px;
  align-items: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.url});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    height: 30vh;
  }
`;

function ImageBox() {
  const { movie, movieLoading } = useSelector(
    (state: RootState) => state.movie,
  );

  return (
    <Wrapper url={movie?.movie.movie_poster!}>
      {!movieLoading ? <PosterImage /> : null}
    </Wrapper>
  );
}

export default ImageBox;
