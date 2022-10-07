import React from 'react';
import styled from 'styled-components';
import SearchInput from '../components/main/SearchInput';
import Layout from '../components/common/Layout';
import HomeCard from '../components/main/HomeCard';

const Wrapper = styled.div`
  display: flex;
  margin: 4rem 0 -5rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-right: 1rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <>
      <Layout isNavSearch={true} isMain={true} />
      <Wrapper>
        <Header>
          <Title>Title</Title>
          <SearchInput />
        </Header>
        <HomeCard />
        <HomeCard />
      </Wrapper>
    </>
  );
}

export default Home;
