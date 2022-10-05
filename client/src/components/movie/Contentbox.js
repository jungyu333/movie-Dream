import { useState } from 'react';
import { Container, Paper } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 600px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 450px;
  height: 400px;
  margin: 30px 10px;
  border-radius: 15px;
  background-color: white;
`;

function ContentBox() {
  return (
    <Wrapper>
      <CustomPaper elevation={9} className="contentbox" />

      <CustomPaper elevation={9} className="reviewbox" />
    </Wrapper>
  );
}

export default ContentBox;
