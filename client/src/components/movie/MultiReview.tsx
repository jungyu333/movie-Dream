import { Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import MultiReviewItem from './MultiReviewItem';
import ReviewNoResult from './ReviewNoResult';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomDivider = styled(Divider)`
  border-color: rgba(0, 0, 0, 0.15);
`;

function MultiReview() {
  const { reviews } = useSelector((state: RootState) => state.review);
  return (
    <Wrapper>
      {reviews!.review.data.positive.length > 0 ||
      reviews!.review.data.negative.length > 0 ? (
        <>
          <MultiReviewItem
            reviewData={reviews!.review.data.positive}
            title="Positive"
          />
          <CustomDivider orientation="vertical" flexItem />
          <MultiReviewItem
            reviewData={reviews!.review.data.negative}
            title="Negative"
          />
        </>
      ) : (
        <ReviewNoResult />
      )}
    </Wrapper>
  );
}

export default MultiReview;
