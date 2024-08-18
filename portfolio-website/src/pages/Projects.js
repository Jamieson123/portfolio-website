import React from 'react';
import styled from 'styled-components';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiCsharp, SiJquery } from 'react-icons/si';

// Styled Components
const ProjectsSection = styled.section`
  padding: 50px 150px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const GridItem = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GridItemIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const GridItemLabel = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

// Technologies and Tools Data
const technologies = [
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'HTML/CSS', icon: <FaHtml5 />, secondaryIcon: <FaCss3Alt /> }, // Includes both HTML and CSS
  // { name: 'ServiceNow Platform', icon: <SiServicenow /> }, // Omitted due to missing icon
  { name: 'Git/GitHub', icon: <FaGitAlt /> },
  { name: 'C#', icon: <SiCsharp /> },
  { name: 'jQuery', icon: <SiJquery /> },
  { name: 'Node.Js', icon: <FaNodeJs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, // For Tailwind CSS
];

// Main Projects Component
const Projects = () => (
  <ProjectsSection>
    <SectionTitle>Technologies and Tools</SectionTitle>
    <GridContainer>
      {technologies.map((tech, index) => (
        <GridItem key={index}>
          <GridItemIcon>{tech.icon} {tech.secondaryIcon && tech.secondaryIcon}</GridItemIcon>
          <GridItemLabel>{tech.name}</GridItemLabel>
        </GridItem>
      ))}
    </GridContainer>

    <SectionTitle>My Projects</SectionTitle>
    <GridContainer>
      <GridItem>
        <GridItemLabel>Project 1</GridItemLabel>
        <GridItemLabel>A brief description of the project.</GridItemLabel>
        <GridItemLabel>
          <a href="#!" style={{ color: 'inherit' }}>View Project</a>
        </GridItemLabel>
      </GridItem>
      <GridItem>
        <GridItemLabel>Project 2</GridItemLabel>
        <GridItemLabel>A brief description of the project.</GridItemLabel>
        <GridItemLabel>
          <a href="#!" style={{ color: 'inherit' }}>View Project</a>
        </GridItemLabel>
      </GridItem>
      {/* Add more project items as needed */}
    </GridContainer>
  </ProjectsSection>
);

export default Projects;
