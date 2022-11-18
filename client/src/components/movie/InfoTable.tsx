import { Container, Divider } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ModalMovie from './ModalMovie';
import React from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { setCastInfo } from '../../reducer/movie';

const Wrapper = styled(Container)`
  margin: 1rem 0;
  font-size: 0.9rem;
`;

const Title = styled.div`
  display: flex;
  font-weight: 600;
  & h1 {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  & h2 {
    color: gray;
  }
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    color: gray;
    margin-right: 10px;
  }

  & div:first-child {
    & svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
      fill: #d99204;
    }
  }
`;

const Genre = styled.div`
  display: flex;
  color: gray;
  margin: 0.5rem 0;

  & div {
    margin-right: 5px;
  }
`;

const MainInfo = styled.div`
  margin-top: 0.8rem;
  height: 20vh;
  max-height: 180px;
`;

const Director = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 5px 0;
  & h1 {
    font-weight: 600;
    margin-right: 10px;
  }

  & div {
    color: gray;
    opacity: 0.8;
    margin-right: 5px;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
    max-height: 50px;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Actor = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;

  font-size: 1rem;
  margin: 5px 0;
  & h1 {
    font-weight: 600;
    margin-right: 10px;
    min-width: max-content;
  }

  & div {
    display: flex;
    line-height: 1.2;
    flex-wrap: wrap;
    color: gray;
    opacity: 0.8;
    margin-right: 5px;
    max-height: 60px;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    cursor: pointer;
    & div {
      min-width: max-content;
      :hover {
        opacity: 1;
      }
    }
  }
`;

const DescriptionContainer = styled.div`
  height: 8vh;
  min-height: 80px;

  margin: 5px 0;
  & h1 {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 10px;
  }
  & div {
    height: 80%;
    margin-top: 5px;
    color: gray;
    overflow-y: auto;
    line-height: 1.5;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function InfoTable() {
  const { movie } = useSelector((state: RootState) => state.movie);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const params = useParams();

  const handleOpenActor = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(
      setCastInfo({ name: (event.target as Element).innerHTML, group: '배우' }),
    );
    setOpen(true);
  };

  const handleOpenDirector = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(
      setCastInfo({ name: (event.target as Element).innerHTML, group: '감독' }),
    );
    setOpen(true);
  };

  const handleClose = useCallback(() => setOpen(false), []);
  useEffect(() => {
    setOpen(false);
  }, [params.id]);

  return (
    <Wrapper>
      {movie ? (
        <>
          <Title>
            <h1>{movie.movie.h_movie}</h1>
          </Title>
          <SubInfo>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              {movie.movie.score_avg ? movie.movie.score_avg.toFixed(2) : '0'} |
            </div>

            <div>{movie.movie.opening_date} |</div>
            <div>{movie?.movie.show_time} 분 |</div>
            {movie.movie.nation && <div>{movie.movie.nation[0]} </div>}
          </SubInfo>
          <Genre>
            {movie.movie.genre
              ? movie.movie.genre.map((item, index) => (
                  <div key={index}>| {item} </div>
                ))
              : null}
          </Genre>
          <Divider />
          <MainInfo>
            <Director>
              <h1>감독</h1>

              {movie.movie.movie_director ? (
                <div onClick={event => handleOpenDirector(event)}>
                  {movie.movie.movie_director}
                </div>
              ) : null}
            </Director>
            <Divider />
            <Actor>
              <h1>출연</h1>
              <div>
                {movie?.movie.movie_actor
                  ? movie.movie.movie_actor
                      .filter(item => item.part !== '조연')
                      .map((item, index) => (
                        <div
                          onClick={event => handleOpenActor(event)}
                          key={index}
                        >
                          {item.name}
                        </div>
                      ))
                  : null}
              </div>
            </Actor>
            <Divider />
            <DescriptionContainer>
              <h1>소개</h1>
              <div>{movie.movie.movie_story}</div>
            </DescriptionContainer>
          </MainInfo>
          <ModalMovie handleClose={handleClose} open={open} />
        </>
      ) : null}
    </Wrapper>
  );
}

export default InfoTable;
