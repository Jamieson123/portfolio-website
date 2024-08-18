// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import TechnicalSkills from '../components/TechnicalSkills';
import HarvardCert from '../assets/cs50p_certificate.jpg';  // Import the Harvard cert as an image
import ServiceNowLogo from '../assets/servicenow_logo.jpg';  // Import the ServiceNow logo

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
  margin-top: 20px;
`;

const Image = styled.img`
  width: 48%;  // Each image will take up about half the container's width
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => (
  <AboutSection>
    <LeftColumn>
      <Box>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>
          I'm Darell Jamieson, a passionate and results-driven software developer with a strong foundation in key programming languages like HTML, CSS, JavaScript, and Python. My technical expertise spans across popular frameworks such as React and Node.js, honed through hands-on experience and advanced technical training. My journey from military service to tech has provided me with a unique blend of strategic insight and technical know-how, especially in configuring and customizing software solutions like ServiceNow.
        </Paragraph>
        <Paragraph>
          During my time as a ServiceNow Developer, I've successfully developed and deployed over 20 projects, customizing ServiceNow modules and applications, including Incident Management and Change Management. My proficiency in IT Service Management (ITSM), coupled with my ability to implement best practices and automate ITIL processes within ServiceNow, has enabled me to deliver efficient, scalable, and user-friendly solutions.
        </Paragraph>
        <Paragraph>
          My background in the military as a Senior Intelligence Analyst has further strengthened my leadership, analytical, and communication skills. I've managed teams, led high-stakes initiatives, and conducted in-depth data analysis and reporting, which have all contributed to my effectiveness as a developer. With a solid understanding of Object-Oriented Programming, API integration, and Agile development methodologies, I am committed to continuous learning and innovation in the field of software development.
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
    </LeftColumn>

    <RightColumn>
      <Box>
        <SectionTitle>Skills & Highlights</SectionTitle>
        <TechnicalSkills />
      </Box>

      <ImageContainer>
        <Image src={HarvardCert} alt="Harvard Certification" />
        <Image src={ServiceNowLogo} alt="ServiceNow Logo" />
      </ImageContainer>
    </RightColumn>
  </AboutSection>
);

export default About;
