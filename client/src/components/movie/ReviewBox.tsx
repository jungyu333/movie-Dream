import styled from 'styled-components';
import ReviewTable from './ReviewTable';
import ReviewLoading from './ReviewLoading';
import React from 'react';
import { IReviewBoxProps } from '../../@types/movie';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  min-height: 290px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  background-color: white;
  padding: 10px;
  margin-top: 1rem;
`;

function ReviewBox({ isMobile }: IReviewBoxProps) {
  const { reviewLoading } = useSelector((state: RootState) => state.review);
  return (
    <Wrapper>
      {reviewLoading ? <ReviewLoading /> : <ReviewTable isMobile={isMobile} />}
    </Wrapper>
  );
}

export default ReviewBox;
