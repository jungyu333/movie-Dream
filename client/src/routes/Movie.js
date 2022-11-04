import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ImageBox from '../components/movie/ImageBox';
import WordCloudBox from '../components/movie/WordCloudBox';
import Layout from '../components/common/Layout';
import FloatingButton from '../components/search/FloatingButton';
import InfoBox from '../components/movie/InfoBox';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Review from '../components/movie/Review';

const Wrapper = styled(Container)`
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
`;

const Header = styled(Container)`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  @media ${({ theme }) => theme.device.smallTablet} {
    flex-direction: column;
  }
`;

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({
    movie: {},
    wordCloud: [],
    isLoading: true,
  });

  useEffect(() => {
    axios.get(`/api/search/movie?movie_id=${id}`).then(res =>
      setMovieData({
        movie: { ...res.data.movie },
        wordCloud: [...res.data.word_cloud],
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

          <Review />
          <WordCloudBox wordCloud={movieData.wordCloud} />

          <FloatingButton />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Movie;
