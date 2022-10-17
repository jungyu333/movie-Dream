import {
  Box,
  Modal,
  Button,
  Typography,
  Container,
  ImageList,
  ImageListItem,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const CustomImageList = styled(ImageList)`
  padding: 1rem;
`;
const CustomImageListItem = styled(ImageListItem)`
  margin: 0.5rem;
  &:hover {
    & div {
      opacity: 0.75;
    }
  }
  & img {
  }
  & div {
    padding: 100px 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    background-color: black;
    border-radius: 15px;
    color: white;
    position: absolute;
    bottom: 0;
    opacity: 0;
  }
`;
const CustomContainer = styled(Container)`
  width: fit-content;
  height: 50px;
`;
const CustomBox = styled(Box)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 850px;
  height: 550px;
  background-color: white;
  box-shadow: 24;
  padding: 4;
  border-radius: 15px;
  overflow-y: auto;
`;

function ActorModal({ actorName }, { movie }) {
  /**const id = useParams();*/
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ display: 'flex' }}>
      <Box>
        <Button onClick={handleOpen}>{actorName.name}</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomBox>
          <CustomContainer>
            <Typography variant="h6">{actorName.name}의 다른 작품</Typography>
          </CustomContainer>
          <CustomImageList cols={5} rowHeight={220}>
            {[1, 2, 3, 4, 5].map(item => (
              <Link to={`/movie/${item}`}>
                <CustomImageListItem>
                  <img
                    style={{ borderRadius: 15 }}
                    src="https://img.wavve.com/movieImg/MV_CW01/3/MV_CW01_CW0000011613.jpg"
                    loading="lazy"
                  />
                  <div>영화제목</div>
                </CustomImageListItem>
              </Link>
            ))}
          </CustomImageList>
        </CustomBox>
      </Modal>
    </div>
  );
}

export default ActorModal;
