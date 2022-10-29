import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { InputBase, TextField } from '@mui/material';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-right: 1rem;
`;

const Input = styled(TextField)`
  width: 100%;
  & label {
    color: lightgray;
  }

  & div {
    border-radius: 15px;
  }
`;

const SearchForm = styled.form`
  width: 100%;
  position: relative;
`;

const LayoutSearch = styled.form`
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 5px;
`;

const CustomInputBase = styled(InputBase)`
  color: white;
  font-size: 0.8rem;

  & .MuiInputBase-input {
    padding: 5px;
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px solid lightgray;
  border-radius: 10px;
`;

const DropDownItem = styled.li`
  width: 100%;
  padding: 13px 24px;
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
  background-color: ${props => props.selected && '#f0f0f0'};
`;

function SearchInput({ isNavSearch, isMain }) {
  const autoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [autoContent, setAutoContent] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const navigation = useNavigate();
  const onChange = event => {
    axios
      .get(`/api/auto?query=${event.target.value}`)
      .then(res => {
        setAutoContent([...res.data]);
      })
      .catch(err => console.error(err));

    setIsOpen(true);
  };

  const onClickAutoItem = useCallback(movieTitle => {
    setContent(movieTitle);
  }, []);

  const ArrowDown = 'ArrowDown';
  const ArrowUp = 'ArrowUp';
  const Escape = 'Escape';
  const Enter = 'Enter';
  const handleKeyArrow = e => {
    if (autoContent.length > 0) {
      switch (e.key) {
        case ArrowDown:
          setCursor(cursor + 1);
          if (autoRef.current?.childElementCount === cursor + 1) setCursor(0);
          break;
        case ArrowUp:
          setCursor(cursor - 1);
          if (cursor <= 0) {
            setAutoContent([]);
            setCursor(-1);
          }
          break;
        case Escape:
          setAutoContent([]);
          setCursor(-1);
          break;
        case Enter:
          if (cursor === -1) {
            setContent(e.target.value);
          }
          setContent(autoContent[cursor].h_movie);
          setCursor(-1);
          break;
        default:
          break;
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    setContent(e.target.value);
  };

  useEffect(() => {
    if (content) {
      navigation(
        `/search?query=${content}&nationFlag=${null}&sort=${'opening_date'}&genreFilter=${null}&showTimeFilter=${'0,180'}&openDateFilter=${''}&size=${5}`,
      );
    }
  }, [content, navigation]);

  useEffect(() => {
    const handleCloseSearch = e => {
      if (autoRef.current && !autoRef.current.contains(e.target)) {
        setIsOpen(false);
        setCursor(-1);
      }
    };

    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.addEventListener('click', handleCloseSearch);
    };
  }, [autoRef, isOpen]);

  return (
    <>
      {isMain ? null : (
        <>
          {isNavSearch ? (
            <LayoutSearch onSubmit={onSubmit} autoComplete="off">
              <CustomInputBase
                onChange={onChange}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </LayoutSearch>
          ) : (
            <>
              <Title>Title</Title>
              <Wrapper>
                <SearchForm onSubmit={onSubmit} autoComplete="off">
                  <Input
                    id="outlined-basic"
                    label="영화 검색하기"
                    onChange={onChange}
                    onKeyDown={handleKeyArrow}
                  />
                  {isOpen && autoContent.length > 0 ? (
                    <DropDownList ref={autoRef}>
                      {autoContent.map((item, index) => (
                        <DropDownItem
                          key={item.movie_id}
                          selected={cursor === index}
                          onClick={() => onClickAutoItem(item.h_movie)}
                        >
                          {item.h_movie}
                        </DropDownItem>
                      ))}
                    </DropDownList>
                  ) : null}
                </SearchForm>
              </Wrapper>
            </>
          )}
        </>
      )}
    </>
  );
}

export default SearchInput;
