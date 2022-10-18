import { Container, Paper, Skeleton, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Infobox from './Infobox';
import axios from 'axios';
import Posterimage from './Posterimage';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 50%;
`;
const CustomPaper = styled(Paper)`
  height: 100%;
  border-radius: 15px;
`;

function Imagebox({ url }) {
  return (
    <Wrapper>
      <CustomPaper elevation={3}>
        <Posterimage poster={url} />
      </CustomPaper>
    </Wrapper>
  );
}

export default Imagebox;
