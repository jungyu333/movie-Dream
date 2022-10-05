import React from 'react';
import styled from 'styled-components';
import HomeCard from '../components/main/HomeCard';
import SearchInput from '../components/main/SearchInput';
import Layout from '../components/common/Layout';



const Wrapper = styled.div`
  display: flex;
  margin: 10rem auto;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-right: 2rem;
`;


function Home() {
  return (
    <>
      <Layout isNavSearch={true} isMain={true} />

      <Wrapper>
        <Title>Title</Title>
        <SearchInput/>
      </Wrapper>
       
    </>
  );
}

export default Home;
