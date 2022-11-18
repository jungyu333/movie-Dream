import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ImageBox from '../components/movie/ImageBox';
import Layout from '../components/common/Layout';
import FloatingButton from '../components/search/FloatingButton';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Review from '../components/movie/Review';
import { useAppDispatch } from '../store/store';
import { loadMovie } from '../action/movie';
import InfoBox from '../components/movie/InfoBox';

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
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadMovie({ id }));
    }
  }, [dispatch, id]);

  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header>
            <ImageBox />
            <InfoBox />
          </Header>

          {/* <Review /> */}

          <FloatingButton />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Movie;
