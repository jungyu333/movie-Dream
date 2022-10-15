import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Carousel from '../components/search/Carousel';
import FloatingButton from '../components/search/FloatingButton';
import FloatingGenre from '../components/search/FloatingGenre';
import Genre from '../components/search/Genre';
import SearchList from '../components/search/SearchList';
import SortBox from '../components/search/SortBox';
import axios from 'axios';
import ShowTime from '../components/search/ShowTime';

const Wrapper = styled(Container)`
  display: flex;
  margin: 5rem auto 0 auto;
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
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState({
    movieData: {
      movie: [],
      genre: [],
    },
    isLoading: false,
  });
  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');
  const genreFilter = searchParams.get('genreFilter');
  const showTimeFilter = searchParams.get('showTimeFilter');

  useEffect(() => {
    axios
      .get(
        `/api/search?query=${query}&page=${page}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&showTimeFilter=${showTimeFilter}&size=${30}`,
      )
      .then(res =>
        setSearchData({
          movieData: {
            movie: [...res.data.movies],
            genre: [...res.data.genre],
          },
          isLoading: true,
        }),
      )
      .catch(err => console.error(err));
  }, [query, page, sortType, nationFlag, genreFilter, showTimeFilter]);

  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header>
            <SearchHead>
              <h1>"{query}"</h1>
              <p>검색결과</p>
            </SearchHead>
          </Header>
          <Genre genre={searchData.movieData.genre} />
          <Carousel />
          <SortBox />
          <SearchList movies={searchData.movieData.movie} />
          <FloatingButton />
          <FloatingGenre genre={searchData.movieData.genre} />
          <ShowTime />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Search;
