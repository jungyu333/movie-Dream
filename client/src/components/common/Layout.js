import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../main/SearchInput';

const CustomAppBar = styled(AppBar)`
  background-color: #6459e7;
  & div {
    color: white;
    letter-spacing: 2px;
  }
`;

const CustomToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLink = styled.div`
  display: flex;
  width: 10vw;
  align-items: center;

  & svg {
    width: 20%;
    height: 20%;
    min-width: 30px;
    min-height: 30px;
    margin-right: 10px;
    fill: white;
    &:hover {
      fill: lightgray;
    }
  }
  & div {
    font-size: 1.2rem;
    &:hover {
      color: lightgray;
    }
  }
`;

function Layout(props) {
  const { window, isNavSearch, isMain, children } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <CustomAppBar>
          <CustomToolbar>
            <Typography variant="h6" component="div">
              <Link to={'/'}>
                <HomeLink>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
                  </svg>
                  <div>Home</div>
                </HomeLink>
              </Link>
            </Typography>
            <SearchInput isNavSearch={isNavSearch} isMain={isMain} />
          </CustomToolbar>
        </CustomAppBar>
      </Slide>
      {children}
    </>
  );
}

export default Layout;
