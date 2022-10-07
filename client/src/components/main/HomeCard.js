import * as React from 'react';
import Box from '@mui/material/Box';
import CardArea from './CardArea';
import Grid from '@mui/material/Grid';
import styled from "styled-components"

const GridStyles = {
  paddingBottom: 2,
  paddingRight: 2,  
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
};

const CustomBox = styled(Box)`
  margin : 8em 0;
`

 function HomeCard() {
  return (
    <CustomBox >
      
          <CardArea />
      
    </CustomBox>
  );
}

export default HomeCard