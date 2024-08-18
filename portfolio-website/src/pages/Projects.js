// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 150px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Projects = () => (
  <ProjectsSection>
    <h2>My Projects</h2>
    <ProjectGrid>
      <ProjectCard title="Project 1" description="A brief description of the project." link="#" />
      <ProjectCard title="Project 2" description="A brief description of the project." link="#" />
      {/* Add more projects here */}
    </ProjectGrid>
  </ProjectsSection>
);

export default Projects;
