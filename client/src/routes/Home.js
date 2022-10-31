import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import SearchInput from '../components/common/SearchInput';

const Wrapper = styled.div`
  display: flex;
  margin: 10rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
      <Layout isNavSearch={true} isMain={true}>
        <Wrapper>
          <Header>
            <SearchInput />
          </Header>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
