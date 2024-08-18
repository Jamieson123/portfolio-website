// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

const ProjectCard = ({ title, description, link }) => (
  <Card>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </ProjectLink>
  </Card>
);

export default ProjectCard;
