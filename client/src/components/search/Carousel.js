import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { padding } from '@mui/system';
import Link from '@mui/material/Link';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const CustomSlicer = styled(Slider)`
  width: 95%;
`;

const ImageBox = styled.div`
  height: 24vh;
  padding: 10px;
  background-color: gray;
  justify-content: center;
`;

const ImageStyle = {
  height: "22vh",
  margin:"auto"
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const ImageLists=[
    {src:"https://movie-phinf.pstatic.net/20220930_90/1664503344646CtlxN_JPEG/movie_image.jpg", link:"https://movie.naver.com/movie/bi/mi/basic.naver?code=219812"},
    {src:"https://movie-phinf.pstatic.net/20220928_85/1664332929020nYWPc_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20221004_281/1664859354607lkMYs_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220906_136/1662449769362fWpdE_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220929_135/1664441921246ae2RC_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220824_252/1661324514413czYBf_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220921_197/1663737442956Ugu4T_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg", link:"#"},
    {src:"https://movie-phinf.pstatic.net/20190724_161/1563931152464tk11A_JPEG/movie_image.jpg", link:"#"},
  ];


  return (
    <Wrapper>
      <CustomSlicer {...settings}>
        {ImageLists.map((image, index) => (
          <ImageBox>
            <a href = {image.link}>
              <img src={image.src} key={index} style={ImageStyle}/>
            </a>
          </ImageBox>
         ))}
      </CustomSlicer>
    </Wrapper>
  );
}

export default Carousel;
