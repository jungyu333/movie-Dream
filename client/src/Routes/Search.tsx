import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Carousel from '../components/common/Carousel';
import FloatingButton from '../components/search/FloatingButton';
import Genre from '../components/search/Genre';
import SearchList from '../components/search/SearchList';
import SortBox from '../components/search/SortBox';
import { useInView } from 'react-intersection-observer';
import { RootState, useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { loadMainMovies } from '../action/search';
import { setPage } from '../reducer/search';
import Header from '../components/search/Header';
import FilterContainer from '../components/search/FilterContainer';

const Wrapper = styled(Container)`
  display: flex;
  margin: 5rem auto 0 auto;
  flex-direction: column;
`;

const Observer = styled.div`
  height: 10px;
`;

function Search() {
  const dispatch = useAppDispatch();
  const {
    query,
    sort,
    genreFilter,
    showTimeFilter,
    openDateFilter,
    nationFlag,
    searchResults,
    moviesLoading,
    hasMoreMovies,
    page,
  } = useSelector((state: RootState) => state.search);

  const [ref, inView] = useInView();

  useEffect(() => {
    dispatch(
      loadMainMovies({
        query,
        sort,
        showTimeFilter,
        genreFilter,
        nationFlag,
        openDateFilter,
        page,
      }),
    );
  }, [
    genreFilter,
    query,
    showTimeFilter,
    openDateFilter,
    sort,
    nationFlag,
    page,
    dispatch,
  ]);

  useEffect(() => {
    if (inView && !moviesLoading && hasMoreMovies) {
      dispatch(setPage());
    }
  }, [inView, moviesLoading, dispatch, hasMoreMovies]);

  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header />
          <Genre />
          <FilterContainer />

          <>
            <Carousel
              title="Hot Movies!"
              movies={searchResults?.top_score_movie!}
            />
            <Carousel
              title="New Movies!"
              movies={searchResults?.top_to_be_open_movie!}
            />
          </>

          <SortBox />
          <SearchList />
          <Observer ref={hasMoreMovies ? ref : undefined} />
          <FloatingButton />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Search;
