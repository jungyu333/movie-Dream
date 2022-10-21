import { Container, Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  display: flex;
  margin: 2rem 0;
  height: 15vh;
  align-items: center;
`;

const CustomRoundedSkeleton = styled(Skeleton)`
  width: 60px;
  height: 100%;
  margin-right: 10px;
  border-radius: 10px;
  background-color: lightgray;
`;

const CustomSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;

function SearchSkeleton() {
  return (
    <CustomContainer>
      <CustomRoundedSkeleton />
      <CustomSkeleton />
    </CustomContainer>
  );
}

export default SearchSkeleton;
