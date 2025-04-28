import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { isDarkTheme } = useTheme();

  return (
    <HeroContainer id="home" isDarkTheme={isDarkTheme}>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Subtitle isDarkTheme={isDarkTheme}>Hi, I'm</Subtitle>
          <Title isDarkTheme={isDarkTheme}>
            Louis <span>Koh</span>
          </Title>
          <Subtitle isDarkTheme={isDarkTheme}>Software Developer</Subtitle>
          <Description isDarkTheme={isDarkTheme}>
            A fresh graduate seeking job opportunities in the IT field.
            Passionate about creating innovative solutions and continuously
            learning new technologies to enhance my skills.
          </Description>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${props => props.isDarkTheme 
    ? 'linear-gradient(to bottom, #0a192f, #112240)' 
    : 'linear-gradient(to bottom, #ffffff, #f8f9fa)'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  span {
    color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default Hero; 