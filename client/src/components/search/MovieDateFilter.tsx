import React, { useCallback } from 'react';
import styled from 'styled-components';
import RadioControlItem from './RadioControlItem';
import moment from 'moment';
import { Grid } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { setOpenDateFilter, setSelected } from '../../reducer/search';

const Wrapper = styled.div`
  border: 1px solid lightgray;
  box-shadow: 2px 2px 5px lightgray;
  border-radius: 10px;
  min-width: 200px;
  min-height: 80px;
  width: 100%;
  font-size: 0.9rem;
  padding: 1rem;
  margin: 1rem 0;
  & h1 {
    font-size: 1rem;
    font-weight: 600;
    color: gray;
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 50%;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
  }
`;

const Header = styled.h1`
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

function MovieDateFilter() {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (value: string) => {
      if (value === '0') {
        dispatch(setSelected(value));
        dispatch(setOpenDateFilter(''));
      } else {
        const today = moment().format('YYYY.MM.DD');
        const calculatedDate = moment()
          .subtract(value, 'M')
          .format('YYYY.MM.DD');
        dispatch(setSelected(value));
        dispatch(setOpenDateFilter(`${calculatedDate},${today}`));
      }
    },
    [dispatch],
  );

  return (
    <Wrapper>
      <Header>개봉 날짜</Header>

      <Grid container>
        <Grid item xl={6} md={3} xs={6}>
          <RadioControlItem
            label="전체 영화"
            id="0"
            value="0"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xl={6} md={3} xs={6}>
          <RadioControlItem
            label="1개월 이내"
            id="1"
            value="1"
            handleChange={handleChange}
          />
        </Grid>

        <Grid item xl={6} md={3} xs={6}>
          <RadioControlItem
            label="3개월 이내"
            id="2"
            value="3"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xl={6} md={3} xs={6}>
          <RadioControlItem
            label="5개월 이내"
            id="3"
            value="5"
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default MovieDateFilter;
