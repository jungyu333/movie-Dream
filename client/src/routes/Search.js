import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/search/Carousel';
import Genre from '../components/search/Genre';
import SearchList from '../components/search/SearchList';
import SortBox from '../components/search/SortBox';

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
        <SortBox />
      </Header>
      <Genre />
      <Carousel />
      <Carousel />
      <SearchList />
    </Wrapper>
  );
}

export default Search;
