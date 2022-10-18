import styled from 'styled-components';

const Box = styled.div`
  height: 50vh;
  margin: 15px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

function Posterimage({ poster }) {
  return (
    <Box>
      <img src={poster} />
    </Box>
  );
}

export default Posterimage;
