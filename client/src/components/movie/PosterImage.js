import styled from 'styled-components';

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  image-rendering: auto;
  max-width: 173px;
  @media ${({ theme }) => theme.device.smallTablet} {
    object-fit: cover;
    height: 90%;
    max-width: 173px;
  }
`;

function PosterImage({ poster }) {
  return <Image src={poster} alt="poster" />;
}

export default PosterImage;
