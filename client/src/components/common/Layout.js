import {
    AppBar,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
  } from '@mui/material';
  import React from 'react';
  import styled from 'styled-components';
  import SearchInput from '../main/SearchInput';
  import Link from '@mui/material/Link';
  
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
  
  function Layout(props) {
    const { window, isNavSearch, isMain } = props;
  
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <>
        <Slide appear={false} direction="down" in={!trigger}>
          <CustomAppBar>
            <CustomToolbar>
              <Typography variant="h6" component="div">
                <Link href={'/'}>홈으로</Link>
              </Typography>
              
              <SearchInput isNavSearch={isNavSearch} isMain={isMain} />
            </CustomToolbar>
          </CustomAppBar>
        </Slide>
        <Toolbar />
      </>
    );
  }
  
  export default Layout;
  