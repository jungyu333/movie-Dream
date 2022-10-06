import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Genre from '../components/search/Genre';

const Wrapper = styled.div`
  margin: 3rem 8rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

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

const SearchHead = styled.div`
  display: flex;
  & h1 {
    margin-right: 10px;
    font-size: 2rem;
    font-weight: 700;
    color: #6459e7;
  }
  & p {
    color: gray;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
`;

function Search() {
  return (
    <Wrapper>
      <Header>
        <SearchHead>
          <h1>"헌트"</h1>
          <p>검색결과</p>
        </SearchHead>

        <SortContainer>
          <Link to={`/search?query=${'원피스'}&sort=${'인기순'}`}>
            <Sort>인기순</Sort>
          </Link>
          <Link to={`/search?query=${'원피스'}&sort=${'평점순'}`}>
            <Sort>평점순</Sort>
          </Link>
        </SortContainer>
      </Header>
      <Genre />
    </Wrapper>
  );
}

export default Search;
