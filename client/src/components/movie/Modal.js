import { Box, Modal, Button, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const actordata = ['이정재'];

const CustomBox = styled(Box)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 750px;
  height: 550px;
  background-color: white;
  border: 2px solid #000;
  border-radius: 15px;
  box-shadow: 24;
  padding: 4;
`;

function ActorModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{actordata}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {actordata}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {actordata}의 다른 출연작
          </Typography>
        </CustomBox>
      </Modal>
    </div>
  );
}

export default ActorModal;
