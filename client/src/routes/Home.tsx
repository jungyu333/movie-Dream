import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import SearchInput from '../components/common/SearchInput';
import { useEffect } from 'react';
import GenreCarousel from '../components/main/GenreCarousel';
import { useSelector } from 'react-redux';
import { loadGenreMovies } from '../action/main';
import { RootState, useAppDispatch } from '../store/store';

const Wrapper = styled.div`
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const dispatch = useAppDispatch();
  const { genreMoviesLoading, genreMovies, genreMoviesDone } = useSelector(
    (state: RootState) => state.main,
  );
  useEffect(() => {
    dispatch(loadGenreMovies());
  }, [dispatch]);

  return (
    <>
      <Layout isNavSearch={true} isMain={true}>
        <Wrapper>
          <Header>
            <SearchInput />
          </Header>

          {genreMoviesDone && <GenreCarousel />}
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
