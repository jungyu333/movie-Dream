import { Paper } from '@mui/material';
import styled from 'styled-components';
import Infotable from './Infotable';

const CustomPaper = styled(Paper)`
  width: 550px;
  height: 380px;
  border-radius: 15px;
  border: 1px;
  margin: 10px;
  background-color: white;
`;

function Infobox({ movie }) {
  return (
    <CustomPaper className="infobox" elevation={3}>
      <Infotable movie={movie} />
    </CustomPaper>
  );
}

export default Infobox;
