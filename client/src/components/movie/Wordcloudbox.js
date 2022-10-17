import { Container, Paper, Skeleton } from '@mui/material';
import styled from 'styled-components';
const CustomSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled(Container)`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: center;
`;
const CustomPaper = styled(Paper)`
  width: 100%;
  height: 300px;
  margin: 10px 5px;
  border-radius: 15px;
  border: 1px;
  background-color: white;
`;

function WordCloudBox() {
  return (
    <Wrapper>
      <CustomPaper className="wordcloudbox" elevation={3}>
        <CustomSkeleton animation="wave" variant="rectangular"></CustomSkeleton>
      </CustomPaper>
    </Wrapper>
  );
}

export default WordCloudBox;
