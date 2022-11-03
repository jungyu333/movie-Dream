import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const buttons = [
    <Button key="positive">Positive</Button>,
    <Button key="negative">Negative</Button>,
  ];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin-top: 6rem;
  }
  & h1 {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
  }
`;


export default function GroupSizesColors() {
  return (
    <Wrapper>
      <h1>리뷰</h1>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        '& > *': {
          m: 1.5,
        },

      }}
    >

      <ButtonGroup color="inherit" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      
    </Box>
    </Wrapper>
    
  );
}