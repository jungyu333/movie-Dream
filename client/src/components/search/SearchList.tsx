import { Container, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import SearchItem from './SearchItem';
import SearchSkeleton from './SearchSkeleton';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const CustomGridContainer = styled(Grid)`
  width: 100%;
`;

function SearchList() {
  const { searchResults, moviesLoading } = useSelector(
    (state: RootState) => state.search,
  );
  return (
    <Wrapper>
      {moviesLoading ? (
        <CustomGridContainer container spacing={{ xs: 0, sm: 2 }}>
          {new Array(5).fill(1).map((_, index) => (
            <SearchSkeleton key={index} />
          ))}
        </CustomGridContainer>
      ) : (
        <CustomGridContainer container spacing={{ xs: 0, sm: 2 }}>
          {searchResults?.movies.map(movie => (
            <SearchItem key={movie.movie_id} movie={movie} />
          ))}
        </CustomGridContainer>
      )}
    </Wrapper>
  );
}

export default SearchList;
