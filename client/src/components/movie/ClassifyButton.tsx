import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { setIsNegative } from '../../reducer/review';
import { RootState, useAppDispatch } from '../../store/store';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin-top: 1rem;
  }
  & h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  display: none;
  @media ${({ theme }) => theme.device.smallTablet} {
    display: flex;
  }
`;

const CustomButton = styled(Button)<{ isnegative: string }>`
  color: ${props => (props.isnegative === 'false' ? '#6459e7' : 'gray')};
  border-color: gray;
  font-size: 0.6rem;
  font-family: SUIT;
  font-weight: 600;
  &:hover {
    color: #6459e7;
    border-color: #6459e7;
  }
  &:last-child {
    color: ${props => (props.isnegative === 'true' ? '#6459e7' : 'gray')};
  }
`;

function ClassifyButton() {
  const { isNegative } = useSelector((state: RootState) => state.review);
  const dispatch = useAppDispatch();
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { target } = event;
    console.log((target as HTMLButtonElement).value);
    dispatch(setIsNegative(parseInt((target as HTMLButtonElement).value)));
  };

  return (
    <Wrapper>
      <h1>리뷰 모아보기</h1>

      <CustomButtonGroup>
        <CustomButton
          isnegative={isNegative.toString()}
          onClick={onClick}
          value={0}
          key="positive"
        >
          Positive
        </CustomButton>
        <CustomButton
          isnegative={isNegative.toString()}
          onClick={onClick}
          value={1}
          key="negative"
        >
          Negative
        </CustomButton>
      </CustomButtonGroup>
    </Wrapper>
  );
}

export default ClassifyButton;
