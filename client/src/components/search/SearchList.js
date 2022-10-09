import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const CustomGridContainer = styled(Grid)`
  width: 100%;
`;

function SearchList() {
  return (
    <Wrapper>
      <CustomGridContainer container spacing={{ xs: 0, sm: 2 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <SearchItem key={index} />
        ))}
      </CustomGridContainer>
    </Wrapper>
  );
}

export default SearchList;
