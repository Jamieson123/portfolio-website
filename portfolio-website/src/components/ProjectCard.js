// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 20px;
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
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ title, description, link }) => (
  <Card>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectLink href={link} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
  </Card>
);

export default ProjectCard;
