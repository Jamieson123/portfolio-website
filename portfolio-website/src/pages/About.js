// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import TechnicalSkills from '../components/TechnicalSkills';
import HarvardCert from '../assets/cs50p_certificate.jpg';  // Import the Harvard cert as an image
import DeveloperResume from '../assets/developer_resume.pdf';  // Import the Developer resume PDF

// Existing Styled Components
const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 150px;
`;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};  /* Use the lighter background */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 50px;
`;

const RightColumn = styled.div`
  flex: 1;
  text-align: left;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const EducationList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const EducationItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;

  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

// New Styled Components for Images
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 69%;  // Each image will take up about half the container's width
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// New Styled Components for Resumes
const ResumeList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ResumeItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;

  a {
    color: ${({ theme }) => theme.colors.primary}; // Customize link color
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const About = () => (
  <AboutSection>
    <LeftColumn>
      <Box>
        <SectionTitle>Hello World</SectionTitle>
        <Paragraph>
        I am Darell Jamieson, a passionate and results-driven software developer with a robust foundation in key programming languages such as HTML, CSS, JavaScript, and Python. My technical expertise spans popular frameworks like React, developed through hands-on experience, self-taught initiatives, and advanced technical training. My tech journey has provided me with a unique blend of strategic insight and technical know-how, which I apply to solving complex problems and building innovative software solutions.
        </Paragraph>
        <Paragraph>
        With a strong background in front-end development, I excel at creating efficient, scalable, and user-friendly interfaces. I am skilled at transforming ideas into functional, intuitive user experiences that enhance usability and engagement. In addition to my front-end skills, I am actively expanding my knowledge of back-end technologies, particularly in working with Node.js and C#. This focus is helping me broaden my capabilities to deliver more comprehensive, full-stack solutions.
        Much of my success stems from my self-motivation and eagerness to learn. 
        </Paragraph>
        <Paragraph>
        I have built a solid understanding of software development practices and tools through self-directed study and continuous exploration of new technologies. This proactive approach has enabled me to stay ahead of industry trends and continually enhance my skills.
        Previously, my role as an intelligence analyst equipped me with invaluable leadership, analytical, and communication skills. I have successfully managed teams, led high-stakes initiatives, and performed in-depth data analysis and reporting. These experiences have sharpened my ability to think critically, adapt quickly, and drive projects forward with precision and focus.
        </Paragraph>
        <Paragraph>
        I am committed to continuous learning and staying abreast of emerging technologies and best practices in software development. Whether working independently or as part of a team, I strive to bring innovation, efficiency, and excellence to every project I undertake. I am eager to leverage my skills and experience to contribute to impactful software development initiatives and drive success in dynamic, fast-paced environments.
        </Paragraph>
      </Box>

      <Box>
        <SectionTitle>Education</SectionTitle>
        <EducationList>
          <EducationItem>American Public University - Bachelor's Degree, Business: 3.88 GPA</EducationItem>
          <EducationItem>Cochise College - Associate’s Degree, Intelligence Analysis</EducationItem>
          <EducationItem>Harvard University - Certification, CS50P Programming w Python</EducationItem>
        </EducationList>
      </Box>

      <Box>
        <SectionTitle>Resumes</SectionTitle>
        <ResumeList>
          <ResumeItem>
            <a href="https://nowlearning.servicenow.com/lxp?id=nl_public&user=jamiesondl425988" target="_blank" rel="noopener noreferrer">
              View My ServiceNow Resume
            </a>
          </ResumeItem>
          <ResumeItem>
            <a href={DeveloperResume} target="_blank" rel="noopener noreferrer">
              View My Full Resume
            </a>
          </ResumeItem>
        </ResumeList>
      </Box>
    </LeftColumn>

    <RightColumn>
      <Box>
        <SectionTitle>Skills & Highlights</SectionTitle>
        <TechnicalSkills />
      </Box>
    
    </RightColumn>
  </AboutSection>
);

export default About;
