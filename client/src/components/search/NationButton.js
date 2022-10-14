import React, { useRef, useState } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  background-color: #6459e7;
  opacity: 0.8;
  padding: 5px 10px;
  &:hover {
    background-color: #6459e7;
    opacity: 1;
  }
`;

const CustomPopper = styled(Popper)`
  z-index: 10;
`;

const CustomGrow = styled(Grow)`
  transform-origin: center top;
`;

function NationButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = ['국내영화', '해외영화'];

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <CustomButton onClick={handleToggle}>
          {options[selectedIndex]}
        </CustomButton>
      </ButtonGroup>
      <CustomPopper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <CustomGrow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </CustomGrow>
        )}
      </CustomPopper>
    </>
  );
}

export default NationButton;
