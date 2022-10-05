import { Container, Paper } from '@mui/material';
import styled from 'styled-components';
import ActorModal from './Modal';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 150px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 950px;
  height: 150px;
  margin: 10px auto;
  border-radius: 15px;
  background-color: white;
`;

function Infobox() {
  return (
    <Wrapper>
      <CustomPaper elevation={9} className="infobox">
        <ActorModal />
      </CustomPaper>
    </Wrapper>
  );
}

export default Infobox;
