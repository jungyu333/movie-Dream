import React from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 5px;
`;

function MultiReviewItem({ reviewData }) {
  return (
    <Wrapper>
      {reviewData.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Wrapper>
  );
}
export default MultiReviewItem;
