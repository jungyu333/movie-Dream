import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IGenreButtonProps } from '../../@types/search';
import { setClickedGenre, setGenreFilter } from '../../reducer/search';
import { RootState, useAppDispatch } from '../../store/store';

const GenreItem = styled.div<{ clickedGenre: string[]; genre: string }>`
  height: 100%;
  cursor: pointer;
  color: gray;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 2px;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: min-content;
  &:hover {
    background-color: lightgray;
    color: white;
  }
  background-color: ${props =>
    props.clickedGenre.includes(props.genre) ? 'lightgray' : ''};
`;

function GenreButton({ genre }: IGenreButtonProps) {
  const dispatch = useAppDispatch();
  const { clickedGenre } = useSelector((state: RootState) => state.search);

  const onClickGenre = () => {
    dispatch(setClickedGenre(genre));
    dispatch(setGenreFilter());
  };

  return (
    <GenreItem genre={genre} clickedGenre={clickedGenre} onClick={onClickGenre}>
      {genre}
    </GenreItem>
  );
}

export default GenreButton;
