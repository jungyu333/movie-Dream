import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import FloatingGenre from './FloatingGenre';
import MovieDateFilter from './MovieDateFilter';
import ShowTime from './ShowTime';

const Wrapper = styled(Container)`
  position: fixed;
  z-index: 1000;
  left: 3vw;
  top: 15%;
  width: 13vw;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: center;
    height: 15vh;
    min-height: 100px;
    width: 100%;
    align-items: center;
    position: static;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    height: 20vh;
    min-height: 200px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    position: static;
    margin-top: 20px;
  }
`;

function FilterContainer() {
  return (
    <Wrapper>
      <ShowTime />
      <MovieDateFilter />
      <FloatingGenre />
    </Wrapper>
  );
}

export default FilterContainer;
