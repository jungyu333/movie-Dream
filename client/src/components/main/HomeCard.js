import * as React from 'react';
import Box from '@mui/material/Box';
import CardArea from './CardArea';
import styled from "styled-components"


const CustomBox = styled(Box)`
  margin : 2em 0 -1em 0;
`

 function HomeCard() {
  return (
    <CustomBox >
      <CardArea />
    </CustomBox>
  );


}

export default HomeCard
