import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { InputBase } from '@mui/material';

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
  width: 60%;
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
    padding: 1px;
  }
`;

function SearchInput({ isNavSearch, isMain }) {
  const [content, setContent] = useState('');
  const navigation = useNavigate();
  const onChange = e => {
    setContent(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    navigation(`/search?query=${content}`);
  };

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
            <SearchForm onSubmit={onSubmit} autoComplete="off">
              <Input
                id="outlined-basic"
                label="영화 검색하기"
                onChange={onChange}
              />
            </SearchForm>
          )}
        </>
      )}
    </>
  );
}

export default SearchInput;
