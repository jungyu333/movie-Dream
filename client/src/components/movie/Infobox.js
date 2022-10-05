import { Container, Paper } from '@mui/material';
import styled from 'styled-components';
import Infotable from './Infotable';
import ActorModal from './Modal';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 150px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 1000px;
  height: 150px;
  margin: 10px auto;
  border-radius: 15px;
  border: 1px;
  background-color: white;
`;

function Infobox() {
  return (
    <Wrapper>
      <CustomPaper className="infobox">
        <Infotable />
      </CustomPaper>
    </Wrapper>
  );
}

export default Infobox;
