import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const buttons = [
    <Button key="positive">Positive</Button>,
    <Button key="negative">Negative</Button>,
  ];

export default function GroupSizesColors() {
  return (
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
  );
}