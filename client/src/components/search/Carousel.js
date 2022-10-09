import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const CustomSlicer = styled(Slider)`
  width: 95%;
`;

const Image = styled.div`
  height: 18vh;
  padding: 10px;
  background-color: gray;
`;

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Wrapper>
      <CustomSlicer {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <Image key={index}>{item}</Image>
        ))}
      </CustomSlicer>
    </Wrapper>
  );
}

export default Carousel;
