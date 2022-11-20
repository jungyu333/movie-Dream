import React, { useEffect, useState } from 'react';
import ClassifyButton from './ClassifyButton';
import { Container } from '@mui/material';
import ReviewBox from './ReviewBox';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { loadReviews } from '../../action/review';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  margin-bottom: 2rem;
`;

function Review() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    if (params.id) {
      dispatch(loadReviews({ id: params.id }));
    }
  }, [dispatch, params.id]);

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsMobile(1);
    } else {
      setIsMobile(0);
    }
  };

  useEffect(() => {
    window.innerWidth > 900 ? setIsMobile(1) : setIsMobile(0);
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CustomContainer>
      <ClassifyButton />
      <ReviewBox isMobile={isMobile} />
    </CustomContainer>
  );
}

export default Review;
