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
import { RootState, useAppDispatch } from '../../store/store';
import { setNationFlag } from '../../reducer/search';
import { useSelector } from 'react-redux';

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
  z-index: 50;
`;

const CustomGrow = styled(Grow)`
  transform-origin: center top;
`;

function NationButton() {
  const [open, setOpen] = useState(false);
  const { nationFlag } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();
  const anchorRef = useRef<HTMLDivElement>(null);
  const options = ['전체영화', '국내영화', '해외영화'];

  const handleMenuItemClick = (index: number) => {
    setOpen(false);
    dispatch(setNationFlag(index));
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = () => {
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
          {nationFlag === null
            ? '전체영화'
            : nationFlag === 'True'
            ? '국내영화'
            : '해외영화'}
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
                      onClick={() => handleMenuItemClick(index)}
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
