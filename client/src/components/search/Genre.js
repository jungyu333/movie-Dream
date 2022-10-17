import React, { useState } from 'react';
import styled from 'styled-components';
import GenreButton from './GenreButton';

const FilterContainer = styled.div`
  max-width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  & div {
    font-size: 0.7rem;
    color: gray;
    margin: 10px 5px;
    min-width: 4rem;
    text-align: center;
    border: 1px solid gray;
    padding: 5px 10px;
    border-radius: 20px;

    cursor: pointer;
    &:hover {
      background-color: lightgray;
      color: black;
    }
  }
`;

function Genre({ genre, clickedGenre, setClickedGenre }) {
  return (
    <FilterContainer>
      {genre.map((item, index) => (
        <GenreButton
          clickedGenre={clickedGenre}
          setClickedGenre={setClickedGenre}
          key={index}
          item={item.key}
        />
      ))}
    </FilterContainer>
  );
}

export default Genre;
