import React, { useCallback } from 'react';
import { Container, Slider } from '@mui/material';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CustomBox = styled(Container)`
  position: fixed;
  left: 4%;
  bottom: 20%;
  width: 12vw;
  min-width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px 25px;
  box-shadow: 2px 2px 2px lightgray;
  & h1 {
    margin: 10px 0;
    font-size: 1rem;
    font-weight: 600;
    color: gray;
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
`;
const marks = [
  {
    value: 0,
    label: '0',
  },

  {
    value: 60,
    label: '60',
  },

  {
    value: 120,
    label: '120',
  },

  {
    value: 180,
    label: '180',
  },
];

function ShowTime() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const genreFilter = searchParams.get('genreFilter');
  const nationFlag = searchParams.get('nationFlag');

  const navigation = useNavigate();
  const onChangeValue = useCallback(
    (event, newValue) => {
      let showTime = [0];
      showTime.push(newValue);

      showTime = showTime.join(',');
      navigation(
        `/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&showTimeFilter=${showTime}&size=${30}`,
      );
    },
    [query, sortType, genreFilter, nationFlag, navigation],
  );

  return (
    <CustomBox>
      <h1>Select Time</h1>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        step={30}
        max={180}
        valueLabelDisplay="auto"
        marks={marks}
        onChangeCommitted={onChangeValue}
      />
    </CustomBox>
  );
}

export default ShowTime;
