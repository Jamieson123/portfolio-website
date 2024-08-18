// src/components/TechnicalSkills.js
import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  margin: 20px 0;
`;

const SkillBar = styled.div`
  margin: 10px 0;
`;

const SkillLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

const SkillLevel = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SkillProgress = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 20px;
  width: ${({ level }) => level}%;
  transition: width 0.5s ease;
`;

const skills = [
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'Python', level: 85 },
  { name: 'HTML/CSS', level: 78 },
  { name: 'ServiceNow Platform', level: 65 },
  { name: 'Git/GitHub', level: 80 },
  { name: 'C#', level: 45 },
  { name: 'jQuery', level: 45 },
];

const TechnicalSkills = () => (
  <SkillsContainer>
    {skills.map((skill, index) => (
      <SkillBar key={index}>
        <SkillLabel>{skill.name}</SkillLabel>
        <SkillLevel>
          <SkillProgress level={skill.level} />
        </SkillLevel>
      </SkillBar>
    ))}
  </SkillsContainer>
);

export default TechnicalSkills;
