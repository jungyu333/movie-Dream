import { Container, Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  margin: 0.8rem 0;
  display: flex;
`;

const CustomSkeleton = styled(Skeleton)`
  background-color: lightgray;
  border-radius: 10px;
  margin: 0 5px;
  width: 50px;
  height: 30px;
`;

function GenreSkeleton() {
  return (
    <CustomContainer>
      {[1, 2, 3, 4, 5].map(item => (
        <CustomSkeleton key={item} />
      ))}
    </CustomContainer>
  );
}

export default GenreSkeleton;
