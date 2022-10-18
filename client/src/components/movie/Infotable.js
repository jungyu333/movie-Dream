import { Box, List, ListItem, Button, Container } from '@mui/material';
import styled from 'styled-components';
import ActorModal from './Actormodal';
import { useState, useEffect } from 'react';
import DirectorModal from './Directormodal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Wrapper = styled(Container)``;
const CustomBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Customdiv = styled.div`
  max-height: 10%;
  max-width: 80%;
`;
const Navdiv = styled.div`
  display: flex;
  width: 7%;
`;

function Infotable() {
  
  return (
    <CustomBox>
      <List>
        <ListItem>
          <Customdiv>상영상태 표시</Customdiv>
        </ListItem>
        <ListItem>
          <Navdiv>감독</Navdiv>
          <Customdiv>
            <DirectorModal />
          </Customdiv>
        </ListItem>
        <ListItem>
          <Navdiv>출연</Navdiv>
          <Customdiv>
            <ActorModal />
          </Customdiv>
        </ListItem>
        <ListItem>
          <Navdiv>소개</Navdiv>
        </ListItem>
        <ListItem>이곳은 스토리가 나올 구역입니다.</ListItem>
      </List>
    </CustomBox>
  );
}

export default Infotable;
