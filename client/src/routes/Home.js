import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import SearchInput from '../components/common/SearchInput';
import { useState, useEffect } from 'react';
import Carousel from '../components/search/Carousel';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  margin: 10rem 0;
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

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 75%;
  z-index: 3;
`;

function Home() {
  const [movieDatas, setMovieDatas] = useState({
    movieData: [],
    isLoading: true,
  });

  useEffect(() => {
    axios.get('api/search/genre').then(res => {
      setMovieDatas({
        movieData: [...res.data],
        isLoading: false,
      });
    });
  }, []);

  let arr = [];
  let i = 0;
  while (i < 3) {
    let n = Math.floor(Math.random() * 10) + 1;
    if (!sameNum(n)) {
      arr.push(n);
      i++;
    }
  }
  function sameNum(n) {
    for (var i = 0; i < arr.length; i++) {
      if (n === arr[i]) {
        return true;
      }
    }
    return false;
  }

  let a = arr[0];
  let b = arr[1];
  let c = arr[2];

  return (
    <>
      <Layout isNavSearch={true} isMain={true}>
        <Wrapper>
          <Header>
            <SearchInput />
          </Header>
          <SliderWrapper>
            {!movieDatas.isLoading && (
              <Carousel
                title={movieDatas.movieData[a].genre}
                movies={movieDatas.movieData[a].movies}
              />
            )}
          </SliderWrapper>
          <SliderWrapper>
            {!movieDatas.isLoading && (
              <Carousel
                title={movieDatas.movieData[b].genre}
                movies={movieDatas.movieData[b].movies}
              />
            )}
          </SliderWrapper>
          <SliderWrapper>
            {!movieDatas.isLoading && (
              <Carousel
                title={movieDatas.movieData[c].genre}
                movies={movieDatas.movieData[c].movies}
              />
            )}
          </SliderWrapper>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
