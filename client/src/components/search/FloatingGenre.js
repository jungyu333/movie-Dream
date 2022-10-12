import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  width: 10vw;
  min-width: 200px;
  height: fit-content;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 2px 2px 5px lightgray;
  padding: 10px;
  position: fixed;
  z-index: 1000;
  left: 4%;
  top: 10%;
  &:hover {
    opacity: 1;
  }
  opacity: ${props => (props.scroll ? '0.9' : '0')};
  visibility: ${props => (props.scroll ? '' : 'hidden')};
  transition: ${props =>
    props.scroll
      ? 'all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      : 'all 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const CustomGridContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CustomGridItem = styled(Grid)`
  width: 45%;
  height: 15%;
`;

const Genre = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: lightgray;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 2px;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: min-content;
  &:hover {
    background-color: lightgray;
    color: white;
  }
`;

function FloatingGenre({ genre }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <Wrapper scroll={scroll}>
      <CustomGridContainer container rowSpacing={1}>
        {genre.map((item, index) => (
          <CustomGridItem key={index} item md={12}>
            <Genre>{item.key}</Genre>
          </CustomGridItem>
        ))}
      </CustomGridContainer>
    </Wrapper>
  );
}

export default FloatingGenre;
