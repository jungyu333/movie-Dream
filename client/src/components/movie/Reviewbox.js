import { useState } from 'react';
import { Container, Paper } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 330px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 920px;
  height: 300px;
  margin: 30px 10px;
  border-radius: 15px;
  border: 1px;
  background-color: white;
`;

function ReviewBox() {
  return (
    <Wrapper>
      <CustomPaper className="reviewbox" elevation={3}>
        <b>Review Box</b>
      </CustomPaper>
    </Wrapper>
  );
}

export default ReviewBox;
