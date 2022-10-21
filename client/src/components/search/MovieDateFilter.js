import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import RadioControlItem from './RadioControlItem';
import moment from 'moment';
import { Container } from '@mui/material';

const Wrapper = styled(Container)`
  border: 1px solid lightgray;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 5px lightgray;
  border-radius: 10px;
  padding: 10px;
  min-width: 200px;
  font-size: 0.9rem;
  & h1 {
    font-weight: 600;
    color: gray;
    margin-bottom: 5px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

function MovieDateFilter({ setSearchData, setPage }) {
  const [selected, setSelected] = useState('0');
  const [date, setDate] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');
  const showTimeFilter = searchParams.get('showTimeFilter');
  const genreFilter = searchParams.get('genreFilter');
  const navigation = useNavigate();
  const handleChange = useCallback(
    value => {
      if (value === '0') {
        setSelected(value);
        setDate('');
        setSearchData({
          movieData: {
            movie: [],
            genre: [],
            openMovie: [],
            topMove: [],
          },
          isLoaded: false,
          hasMoreMovies: true,
        });
        setPage(1);
      } else {
        const today = moment().format('YYYY.MM.DD');
        const calculatedDate = moment()
          .subtract(value, 'M')
          .format('YYYY.MM.DD');
        setSelected(value);
        setDate(`${calculatedDate},${today}`);
        setSearchData({
          movieData: {
            movie: [],
            genre: [],
            openMovie: [],
            topMove: [],
          },
          isLoaded: false,
          hasMoreMovies: true,
        });
        setPage(1);
      }
    },
    [setSearchData, setPage],
  );

  useEffect(() => {
    navigation(
      `/search?query=${query}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&showTimeFilter=${showTimeFilter}&openDateFilter=${date}&size=${5}`,
    );
  }, [
    navigation,
    query,
    nationFlag,
    sortType,
    genreFilter,
    showTimeFilter,
    date,
  ]);

  return (
    <Wrapper>
      <div>
        <h1>개봉 날짜</h1>
        <RadioContainer>
          <RadioControlItem
            label="전체 영화"
            id="0"
            value="0"
            selected={selected}
            handleChange={handleChange}
          />
          <RadioControlItem
            label="1개월 이내"
            id="1"
            value="1"
            selected={selected}
            handleChange={handleChange}
          />
          <RadioControlItem
            label="3개월 이내"
            id="2"
            value="3"
            selected={selected}
            handleChange={handleChange}
          />
          <RadioControlItem
            label="5개월 이내"
            id="3"
            value="5"
            selected={selected}
            handleChange={handleChange}
          />
        </RadioContainer>
      </div>
    </Wrapper>
  );
}

export default MovieDateFilter;
