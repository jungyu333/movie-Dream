import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSort } from '../../reducer/search';
import { RootState, useAppDispatch } from '../../store/store';
import NationButton from './NationButton';

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  width: 95%;
  margin-top: 1rem;
`;

const OpeningSort = styled.div<{ sort: string }>`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => (props.sort === 'opening_date' ? 'black' : 'lightgray')};
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

const ScoreSort = styled.div<{ sort: string }>`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => (props.sort === 'score_avg' ? 'black' : 'lightgray')};
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

function SortBox() {
  const dispatch = useAppDispatch();
  const { sort } = useSelector((state: RootState) => state.search);

  const onClickSort = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    dispatch(setSort(target.id));
  };
  return (
    <SortContainer>
      <OpeningSort onClick={onClickSort} id={'opening_date'} sort={sort}>
        최신순
      </OpeningSort>

      <ScoreSort onClick={onClickSort} id={'score_avg'} sort={sort}>
        평점순
      </ScoreSort>

      <NationButton />
    </SortContainer>
  );
}

export default SortBox;
