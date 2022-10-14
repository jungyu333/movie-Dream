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
import { useNavigate, useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const options = ['전체영화', '국내영화', '해외영화'];
  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  let nationFlag = searchParams.get('nationFlag');

  const handleMenuItemClick = (event, index) => {
    setOpen(false);
    if (event.target.innerText === '전체영화') {
      navigation(
        `/search?query=${query}&page=${1}&sort=${sortType}&size=${30}`,
      );
    } else {
      nationFlag = event.target.innerText === '국내영화' ? 'True' : 'False';
      navigation(
        `/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${sortType}&size=${30}`,
      );
    }
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
          {!nationFlag
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
