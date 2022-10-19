import React, { useCallback, useEffect, useState } from 'react';
import { Container, Slider } from '@mui/material';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CustomBox = styled(Container)`
  position: fixed;
  left: 4%;
  top: 10%;
  width: 10vw;
  min-width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px 15px;
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

function ShowTime() {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState([0, 180]);

  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const genreFilter = searchParams.get('genreFilter');
  const nationFlag = searchParams.get('nationFlag');
  const openDateFilter = searchParams.get('openDateFilter');

  const navigation = useNavigate();
  const onChangeValue = useCallback(
    (event, newValue) => {
      setValue(newValue);
    },
    [setValue],
  );

  useEffect(() => {
    navigation(
      `/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&showTimeFilter=${value}&openDateFilter=${openDateFilter}&size=${30}`,
    );
  }, [
    query,
    nationFlag,
    sortType,
    genreFilter,
    value,
    navigation,
    openDateFilter,
  ]);

  return (
    <CustomBox>
      <h1>Select Time</h1>
      <Slider
        defaultValue={0}
        step={30}
        max={180}
        valueLabelDisplay="auto"
        value={value}
        onChange={onChangeValue}
      />
    </CustomBox>
  );
}

export default ShowTime;
