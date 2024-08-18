// src/components/Footer.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import ContactForm from './ContactForm';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <FooterContainer>
      <FooterText>&copy; 2024 DCJamieson LLC. All rights reserved.</FooterText>
      <FooterText>
        <Link href="https://github.com/Jamieson123" target="_blank">GitHub</Link> |
        <Link href="https://www.linkedin.com/in/darell-jamieson-290b75b6/" target="_blank">LinkedIn</Link> |
        <Link onClick={toggleModal}>Contact Me</Link>
      </FooterText>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Contact Me</h2>
        <ContactForm />
      </Modal>
    </FooterContainer>
  );
};

export default Footer;
