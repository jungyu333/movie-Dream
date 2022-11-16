import React, { useCallback, useState } from 'react';
import { Slider } from '@mui/material';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/store';
import { setShowTimeFilter } from '../../reducer/search';

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 2px 2px 2px lightgray;
  min-width: 200px;
  min-height: 80px;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  & h1 {
    font-size: 1rem;
    font-weight: 600;
    color: gray;
    margin-bottom: 1rem;
  }
  & span {
    font-size: small;
  }
  & .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    background-color: #6459e7;
  }
  & .MuiSlider-track {
    border: 1px solid #6459e7;
  }
  & .MuiSlider-valueLabel {
    background-color: #6459e7;
  }
  & .MuiSlider-valueLabelLabel {
    color: white;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 50%;
    height: 100%;
    margin-right: 1rem;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h1 {
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 50%;
    margin: 0;
    margin-bottom: 10px;
    padding: 1rem 1.5rem;
    & h1 {
      display: none;
    }
  }
`;

function ShowTime() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number[] | number>([0, 180]);

  const onChangeValue = useCallback(
    (event: Event, newValue: number[] | number) => {
      setValue(newValue);
      dispatch(setShowTimeFilter(newValue));
    },
    [dispatch],
  );

  return (
    <Wrapper>
      <h1>Select Time</h1>
      <Slider
        defaultValue={0}
        step={20}
        max={180}
        valueLabelDisplay="auto"
        value={value}
        onChange={onChangeValue}
      />
    </Wrapper>
  );
}

export default ShowTime;
