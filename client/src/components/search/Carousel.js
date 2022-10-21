import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const CustomSlicer = styled(Slider)`
  width: 95%;
`;

const Header = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
  align-self: flex-start;
`;

const ImageBox = styled.div`
  height: 25vh;
  width: 100%;
  min-width: 90px;
  & a {
    position: relative;
    &:hover {
      & img {
        filter: brightness(0.3);
      }
      & div {
        display: flex;
      }
    }
  }
`;

const Image = styled.img`
  height: 100%;
  width: 90%;
  object-fit: fill;
  transition: all 0.4s linear;
`;

const MovieTitle = styled.div`
  font-weight: 600;
  text-align: center;
  display: none;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Carousel({ title, movies }) {
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
      <Wrapper>
        <Header>{title}</Header>
        <CustomSlicer {...settings}>
          {movies.map(item => (
            <ImageBox key={item.movie_id}>
              <Link to={`/movie/${item.movie_id}`}>
                <Image
                  src={
                    item.movie_poster !== ''
                      ? item.movie_poster
                      : '/Noimage.jpeg'
                  }
                  alt="poster"
                />
                <MovieTitle>{item.h_movie}</MovieTitle>
              </Link>
            </ImageBox>
          ))}
        </CustomSlicer>
      </Wrapper>
    </>
  );
}

export default Carousel;
