import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const AboutContainer = styled.section`
  width: 100%;
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
    transition: color 0.3s ease;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #94a3b8;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1517694712202-14ddb8c9d56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #60a5fa;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  svg {
    color: #60a5fa;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutText>
          <h2>About Me</h2>
          <p>
            I am a passionate software developer with expertise in building modern web applications.
            My journey in technology started with a curiosity about how things work, and it has
            evolved into a career focused on creating impactful digital solutions.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I strive to create
            applications that are not only functional but also provide an exceptional user experience.
          </p>
          <Skills>
            <SkillItem>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Frontend Development
            </SkillItem>
            <SkillItem>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Backend Development
            </SkillItem>
            <SkillItem>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              UI/UX Design
            </SkillItem>
            <SkillItem>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Problem Solving
            </SkillItem>
          </Skills>
        </AboutText>
        <AboutImage />
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 