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

  & img {
    width: 60%;
    align-items: center;
    margin-left: -10px;
    margin-right: 10px;
   
    
    &:hover {
     
      filter : invert(20%);
    }
  }
  & div {
    margin: 1rem 0 0; 
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
                  <img
                    src={"/Moviedream.png"}
                  />
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
