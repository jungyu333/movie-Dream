import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  width: 95%;
  margin-top: 1rem;
`;

const Sort = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: lightgray;
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

function SortBox({ query }) {
  return (
    <SortContainer>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'opening_date'}&size=${30}`}
      >
        <Sort>최신순</Sort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'score_avg'}&size=${30}`}
      >
        <Sort>평점순</Sort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'국내영화'}&size=${30}`}
      >
        <Sort>국내영화</Sort>
      </Link>
      <Link
        to={`/search?query=${query}&page=${1}&sort=${'해외영화'}&size=${30}`}
      >
        <Sort>해외영화</Sort>
      </Link>
    </SortContainer>
  );
}

export default SortBox;
