// src/components/ContactForm.js
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactForm = () => (
  <Form>
    <Input type="text" name="name" placeholder="Your Name" required />
    <Input type="email" name="email" placeholder="Your Email" required />
    <Textarea name="message" rows="5" placeholder="Your Message" required />
    <SubmitButton type="submit">Send</SubmitButton>
  </Form>
);

export default ContactForm;
