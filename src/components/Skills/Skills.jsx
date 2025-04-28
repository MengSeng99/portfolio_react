import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
  const { isDarkTheme } = useTheme();
  const webDevSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  ];

  const mobileDevSkills = [
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Android', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/234px-Android_logo_2019_%28stacked%29.svg.png' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Swift UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' }
  ];

  const otherSkills = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Tableau', icon: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png' },
  ];

  const languages = [
    { name: 'Mandarin', level: 'Native' },
    { name: 'English', level: 'Excellent' },
    { name: 'Malay', level: 'Excellent' },
  ];

  return (
    <SkillsContainer id="skills" isDarkTheme={isDarkTheme}>
      <SkillsContent>
        <Title isDarkTheme={isDarkTheme}>What I Can Do</Title>
        <Description isDarkTheme={isDarkTheme}>
          As a fresh graduate, I bring a solid foundation in both web and mobile development.
          I'm proficient in creating responsive web applications using modern technologies
          and developing cross-platform mobile applications. My experience includes
          optimizing system performance, implementing new features, and maintaining
          documentation. I'm eager to apply these skills in a professional setting
          and continue learning and growing in the IT industry.
        </Description>

        <SkillsGrid>
          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Web Development</CategoryTitle>
            <SkillsList>
              {webDevSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Mobile Development</CategoryTitle>
            <SkillsList>
              {mobileDevSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Other Skills</CategoryTitle>
            <SkillsList>
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Languages</CategoryTitle>
            <SkillsList>
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    {language.name} ({language.level})
                  </SkillItem>
                </motion.div>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 3rem;
  max-width: 800px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  font-size: 1rem;
  transition: color 0.3s ease;

  span {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  object-fit: contain;
`;

export default Skills; 