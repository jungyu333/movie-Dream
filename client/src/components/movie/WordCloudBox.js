import styled from 'styled-components';
import { Container } from '@mui/material';
import WordCloudCanvas from './WordCloudCanvas';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 290px;
  margin-left: 1rem;
  background-color: white;
  @media ${({ theme }) => theme.device.smallTablet} {
    width: 100%;
    margin: 0;
    margin-top: 8rem;
  }
`;
function WordCloudBox({ wordCloud }) {
  return (
    <Wrapper>
      <WordCloudCanvas wordCloud={wordCloud} />
    </Wrapper>
  );
}

export default WordCloudBox;
