import { Box, List, ListItem, Button } from '@mui/material';
import styled from 'styled-components';
import ActorModal from './Modal';
import { useParams } from 'react-router-dom';

const CustomBox = styled(Box)`
  width: 100%;
  max-width: 360;
  max-height: 150px;
  background-color: white;
`;

function Infotable() {
  const { id } = useParams();
  return (
    <CustomBox>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <div>
              <Button path="/movie/:id">{id}</Button>
            </div>
            <div>상영상태 표시</div>
          </ListItem>
          <ListItem>
            <div>
              <b>감독</b>
            </div>
            <div>
              <ActorModal />
            </div>
          </ListItem>
          <ListItem>
            <div>
              <b>출연</b>
            </div>
            <div>
              <ActorModal />
            </div>
          </ListItem>
          <ListItem>
            <div>
              <b>소개</b>
            </div>
            <div>Plot</div>
          </ListItem>
        </List>
      </nav>
    </CustomBox>
  );
}

export default Infotable;
