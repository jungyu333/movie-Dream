import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ReviewBox from '../components/movie/Reviewbox';
import Imagebox from '../components/movie/Imagebox';
import WordCloudBox from '../components/movie/Wordcloudbox';
import Layout from '../components/common/Layout';
import FloatingButton from '../components/search/FloatingButton';

const Wrapper = styled(Container)`
  display: flex;
  margin: 2rem auto 0 auto;
  flex-direction: column;
`;

function Movie() {
  //const { id } = useParams();

  return (
    <>
      <Wrapper>
        <Layout isNavSearch={true} isMain={false} />
        <div>
          <Imagebox />
        </div>
        <ReviewBox />
        <WordCloudBox />
        <FloatingButton />
      </Wrapper>
    </>
  );
}

export default Movie;
