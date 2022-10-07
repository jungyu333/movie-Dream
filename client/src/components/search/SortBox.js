import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
`;

const Sort = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: lightgray;
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

function SortBox() {
  return (
    <SortContainer>
      <Link to={`/search?query=${'원피스'}&sort=${'최신순'}`}>
        <Sort>최신순</Sort>
      </Link>
      <Link to={`/search?query=${'원피스'}&sort=${'평점순'}`}>
        <Sort>평점순</Sort>
      </Link>
      <Link to={`/search?query=${'원피스'}&sort=${'국내영화'}`}>
        <Sort>국내영화</Sort>
      </Link>
      <Link to={`/search?query=${'원피스'}&sort=${'해외영화'}`}>
        <Sort>해외영화</Sort>
      </Link>
    </SortContainer>
  );
}

export default SortBox;
