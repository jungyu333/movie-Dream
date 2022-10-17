import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import NationButton from './NationButton';

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  width: 95%;
  margin-top: 1rem;
`;

const OpeningSort = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${props => (props.sort === 'opening_date' ? 'black' : 'lightgray')};
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

const ScoreSort = styled.div`
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
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');
  const query = searchParams.get('query');
  const genreFilter = searchParams.get('genreFilter');
  const showTimeFilter = searchParams.get('showTimeFilter');

  return (
    <SortContainer>
      <Link
        to={`/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${'opening_date'}&genreFilter=${genreFilter}&showTimeFilter=${showTimeFilter}&size=${30} `}
      >
        <OpeningSort sort={sort}>최신순</OpeningSort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${'score_avg'}&genreFilter=${genreFilter}&showTimeFilter=${showTimeFilter}&size=${30} `}
      >
        <ScoreSort sort={sort}>평점순</ScoreSort>
      </Link>

      <NationButton />
    </SortContainer>
  );
}

export default SortBox;
