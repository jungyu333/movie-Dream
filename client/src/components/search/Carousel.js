import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { padding } from '@mui/system';
import Link from '@mui/material/Link';
import { fontFamily, fontWeight } from '@mui/system';
 
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const CustomSlicer = styled(Slider)`
  width: 95%;
`;

const ImageBox = styled.div`
  height: 27vh;
  padding: 10px;
  background-color: #F4D1C4;
  justify-content: center;
  .poster:hover{
    transform:scale(1.05);
  }

  }
`;

const ImageStyle = {
  height: "22vh",
  margin:"auto",
};

const NameStyle = {
  fontWeight:"bold",
  textAlign: "center",
  fontFamily: "SUIT"
};

const ClassStyle = {
  fontFamily:"SUIT",
  fontWeight:"bold"
};

function Carousel({openMovie, topMovie}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
    <h1 style={ClassStyle}>평점순</h1>
    <Wrapper>
      <CustomSlicer {...settings}>
        {topMovie.map(item => (
          <ImageBox key={item.movie_id}>
            <a href = {'http://localhost:3000/movie/'+item.movie_id}>
              <img className="poster" src={item.movie_poster} style={ImageStyle} /><br/>
              <div style={NameStyle}>{item.h_movie}</div>
            </a>
          </ImageBox>
         ))}
      </CustomSlicer>
    </Wrapper>
    <h1 style={ClassStyle}>최신순</h1>
    <Wrapper>
      <CustomSlicer {...settings}>
        {openMovie.map(item => (
          <ImageBox key={item.movie_id}>
            <a href = {'http://localhost:3000/movie/'+item.movie_id}>
              <img className="poster" src={item.movie_poster} style={ImageStyle} /><br/>
              <div style={NameStyle}>{item.h_movie}</div>
            </a>
          </ImageBox>
         ))}
      </CustomSlicer>      
    </Wrapper>
    </>

  );
}

export default Carousel;
