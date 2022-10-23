import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  image-rendering: auto;

  @media ${({ theme }) => theme.device.smallTablet} {
    object-fit: cover;
    height: 90%;
  }
`;

function PosterImage({ poster }) {
  return <Image src={poster} alt="poster" />;
}

export default PosterImage;
