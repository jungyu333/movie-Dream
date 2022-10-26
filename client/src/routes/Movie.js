import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ReviewBox from '../components/movie/Reviewbox';
import ImageBox from '../components/movie/ImageBox';
import WordCloudBox from '../components/movie/Wordcloudbox';
import Layout from '../components/common/Layout';
import FloatingButton from '../components/search/FloatingButton';
import InfoBox from '../components/movie/InfoBox';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Wrapper = styled(Container)`
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
`;

const Header = styled(Container)`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  height: 30vh;

  @media ${({ theme }) => theme.device.smallTablet} {
    flex-direction: column;
    height: 60vh;
  }
`;

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({
    movie: {},
    isLoading: true,
  });

  useEffect(() => {
    axios.get(`/api/search/movie?movie_id=${id}`).then(res =>
      setMovieData({
        movie: { ...res.data.movie },
        isLoading: false,
      }),
    );
  }, [id]);

  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header>
            <ImageBox url={movieData.movie.movie_poster} />
            <InfoBox movie={movieData.movie} />
          </Header>
          {/* <ReviewBox /> */}
          {/* <WordCloudBox /> */}
          <FloatingButton />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Movie;
