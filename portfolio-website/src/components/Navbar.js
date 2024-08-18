// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 15px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
    <NavLink to="about" smooth={true} duration={500}>About</NavLink>
    <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
    <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
  </NavbarContainer>
);

export default Navbar;
