import { Container, Paper } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 300px;
`;
const CustomPaper = styled(Paper)`
  width: 750px;
  height: 300px;
  margin: 30px auto;
  border-radius: 15px;
  border: 1px;
  background-color: black;
  opacity: 0.55;
`;

function Imagebox() {
  return (
    <Wrapper>
      <CustomPaper />
    </Wrapper>
  );
}

export default Imagebox;
