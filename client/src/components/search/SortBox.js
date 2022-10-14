import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

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

function SortBox({ query }) {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');
  console.log(sort, nationFlag);
  return (
    <SortContainer>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'opening_date'}&size=${30}`}
      >
        <OpeningSort sort={sort}>최신순</OpeningSort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'score_avg'}&size=${30}`}
      >
        <ScoreSort sort={sort}>평점순</ScoreSort>
      </Link>
      {/* <Link
        to={`/search?query=${query}&page=${1}&nationFlag=${'True'}&sort=${'opening_date'}&size=${30}`}
      >
        <OpeningSort>국내영화</OpeningSort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&nationFlag=${'False'}&sort=${'opening_date'}&size=${30}`}
      >
        <OpeningSort>해외영화</OpeningSort>
      </Link> */}
    </SortContainer>
  );
}

export default SortBox;
