import { Container, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import Infobox from './Infobox';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 380px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 350px;
  height: 380px;
  margin: 10px;
  border-radius: 15px;
  border: 1px;
  background-color: white;
  text-align: center;
`;

function Imagebox() {
  return (
    <Wrapper>
      <CustomPaper elevation={3}>
        <Typography>영화 포스터</Typography>
      </CustomPaper>
      <Infobox />
    </Wrapper>
  );
}

export default Imagebox;
