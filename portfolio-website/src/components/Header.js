// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Darell Jamieson</Title>
    <Subtitle>Full Stack Developer | JavaScript Enthusiast</Subtitle>
  </HeaderContainer>
);

export default Header;
