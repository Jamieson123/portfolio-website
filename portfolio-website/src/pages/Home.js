// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 150px;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
`;

const SubHeading = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
`;

const Home = () => (
  <HomeSection>
    <Heading>Hi, I'm Darell</Heading>
    <SubHeading>I build things for the web.</SubHeading>
  </HomeSection>
);

export default Home;
