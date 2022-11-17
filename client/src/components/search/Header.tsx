import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
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

function Header() {
  const { query } = useSelector((state: RootState) => state.search);
  return (
    <Wrapper>
      <SearchHead>
        <h1>"{query}"</h1>
        <p>검색결과</p>
      </SearchHead>
    </Wrapper>
  );
}

export default Header;
