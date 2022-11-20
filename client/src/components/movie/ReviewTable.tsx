import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IReviewTableProps } from '../../@types/movie';
import { RootState } from '../../store/store';
import MultiReview from './MultiReview';
import ReviewItem from './ReviewItem';
import ReviewNoResult from './ReviewNoResult';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  max-height: 290px;
`;

const Container = styled.div`
  height: 290px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function ReviewTable({ isMobile }: IReviewTableProps) {
  const { isNegative, reviews } = useSelector(
    (state: RootState) => state.review,
  );

  return (
    <Wrapper>
      {isMobile === 1 ? (
        <MultiReview />
      ) : (
        <>
          {!isNegative && reviews ? (
            <>
              {reviews.review.data.positive.length > 0 ? (
                <Container>
                  {reviews!.review.data.positive!.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                  ))}
                </Container>
              ) : (
                <ReviewNoResult />
              )}
            </>
          ) : null}

          {isNegative && reviews ? (
            <>
              {reviews.review.data.negative.length > 0 ? (
                <Container>
                  {reviews!.review.data!.negative!.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                  ))}
                </Container>
              ) : (
                <ReviewNoResult />
              )}
            </>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}

export default ReviewTable;
