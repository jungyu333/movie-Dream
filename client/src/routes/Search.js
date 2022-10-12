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
      header: {},
      list: {},
    },
    isLoading: false,
  });
  const query = searchParams.get('query');
  useEffect(() => {
    axios
      .get(
        `/api/search?query=${query}&page=${page}&sort=${'score_avg'}&size=${30}`,
      )
      .then(res =>
        setSearchData({
          movieData: {
            header: { ...res.data.header },
            list: { ...res.data.list },
          },
          isLoading: true,
        }),
      )
      .catch(err => console.error(err));
  }, [query, page]);
  console.log(searchData);
  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header>
            <SearchHead>
              <h1>"헌트"</h1>
              <p>검색결과</p>
            </SearchHead>
          </Header>
          <Genre />
          <Carousel />
          <SortBox query={query} />
          <SearchList />
          <FloatingButton />
          <FloatingGenre />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Search;
