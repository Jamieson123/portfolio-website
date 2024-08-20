// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { FaJsSquare, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiCsharp, SiJquery, SiTailwindcss } from 'react-icons/si';

const TechIcons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  transition: transform 0.3s ease, color 0.3s ease;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
    margin-bottom: 10px;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);

    svg {
      color: ${({ theme }) => theme.colors.secondary};  // Change this to your desired hover color
    }

    span {
      color: ${({ theme }) => theme.colors.secondary};  // Change this to your desired hover color
    }
  }
`;

const ProjectsSection = styled.section`
  padding: 50px 150px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
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

const projects = [
  {
    title: 'Travel Application',
    description: 'React-based web application designed to help users discover new destinations.',
    link: 'https://github.com/Jamieson123/TravelApp',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const Projects = () => (
  <ProjectsSection>
    <SectionTitle>Technologies and Tools</SectionTitle>
    <TechIcons>
      <IconContainer>
        <FaJsSquare />
        <span>JavaScript</span>
      </IconContainer>
      <IconContainer>
        <FaReact />
        <span>React</span>
      </IconContainer>
      <IconContainer>
        <FaPython />
        <span>Python</span>
      </IconContainer>
      <IconContainer>
        <FaHtml5 />
        <span>HTML/CSS</span>
      </IconContainer>
      <IconContainer>
        <FaGithub />
        <span>Git/GitHub</span>
      </IconContainer>
      <IconContainer>
        <SiCsharp />
        <span>C#</span>
      </IconContainer>
      <IconContainer>
        <SiJquery />
        <span>jQuery</span>
      </IconContainer>
      <IconContainer>
        <FaNodeJs />
        <span>Node.Js</span>
      </IconContainer>
      <IconContainer>
        <SiTailwindcss />
        <span>Tailwind CSS</span>
      </IconContainer>
    </TechIcons>

    <SectionTitle>My Projects</SectionTitle>
    <ProjectsList>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsList>
  </ProjectsSection>
);

export default Projects;
