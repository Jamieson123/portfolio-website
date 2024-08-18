// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  position: relative; /* Add position relative for the close button */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute; /* Position it absolutely within the ModalContent */
  top: 10px;
  right: 20px;
`;

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
