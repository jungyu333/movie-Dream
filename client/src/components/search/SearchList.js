import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const GridContainer = styled(Grid)`
  width: 95%;
`;

function SearchList() {
  return (
    <Wrapper>
      <GridContainer container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <SearchItem key={index} />
        ))}
      </GridContainer>
    </Wrapper>
  );
}

export default SearchList;
