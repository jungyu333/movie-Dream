import { Paper } from '@mui/material';
import styled from 'styled-components';
import Infotable from './Infotable';

const CustomPaper = styled(Paper)`
  width: 550px;
  height: 380px;
  border-radius: 15px;
  margin: 10px;
  border: 1px;
  background-color: white;
`;

function Infobox() {
  return (
    <CustomPaper className="infobox" elevation={3}>
      <Infotable />
    </CustomPaper>
  );
}

export default Infobox;
