import { Box, List, ListItem, Button, Container } from '@mui/material';
import styled from 'styled-components';
import ActorModal from './Actormodal';
import { useParams } from 'react-router-dom';
import DirectorModal from './Directormodal';

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
const CustomBox = styled(Box)`
  width: 100%;
  max-width: 360;
  max-height: 150px;
  background-color: white;
`;

function Infotable() {
  const { id } = useParams();
  return (
    <Wrapper>
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
                <DirectorModal />
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
    </Wrapper>
  );
}

export default Infotable;
