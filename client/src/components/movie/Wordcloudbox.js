import { Container, Paper } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  width: 1500px;
  height: 230px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 920px;
  height: 230px;
  margin: 20px 5px;
  border-radius: 15px;
  border: 1px;
  background-color: white;
`;

function WordCloudBox() {
  return (
    <Wrapper>
      <CustomPaper className="wordcloudbox" elevation={3}>
        <b>WordCloud Box</b>
      </CustomPaper>
    </Wrapper>
  );
}

export default WordCloudBox;
