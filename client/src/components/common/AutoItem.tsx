import React from 'react';
import styled from 'styled-components';
import { IAutoItemProps } from '../../@types/common';
import HighlightedText from './HighlightedText';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 15px;
    min-width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h1 {
    font-size: 0.9rem;
    font-weight: 600;
  }
  & h2 {
    font-size: 0.8rem;
    color: gray;
    margin-top: 10px;
  }
`;

const Poster = styled.img`
  width: 40px;
  height: 50px;
  max-width: 40px;
  min-height: 30px;
  margin-right: 5px;
  object-fit: contain;
  border: 1px solid lightgray;
  background-color: black;
  margin-right: 10px;
`;

function AutoItem({ autoMovie, searchInput }: IAutoItemProps) {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
      </svg>
      {autoMovie.movie_poster && <Poster src={autoMovie.movie_poster} />}
      <Title>
        <h1>
          <>
            {autoMovie.h_movie
              ? HighlightedText(autoMovie.h_movie, searchInput)
              : autoMovie}
          </>
        </h1>

        <h2>{autoMovie.h_movie2 ? autoMovie.h_movie2 : null}</h2>
      </Title>
    </Wrapper>
  );
}

export default AutoItem;
