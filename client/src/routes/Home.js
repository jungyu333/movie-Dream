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
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-right: 1rem;
`;

const Header = styled.div`
  display:flex;
  width:100%;
  justify-content : center;
  align-items:center;
`


export default function Home() {
  return (
    <>
      <Layout isNavSearch={true} isMain={true} />
      <Wrapper>
        <Header>
        <Title>Title</Title>
        <SearchInput/>
        </Header>
        <HomeCard/>
        <HomeCard/>
      </Wrapper>

      
    </>
  );
}
