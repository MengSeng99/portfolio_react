import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { isDarkTheme } = useTheme();
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -120]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.86]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.45, 0.08]);

  return (
    <HeroContainer ref={heroRef} id="home" isDarkTheme={isDarkTheme}>
      <BottomHandoffVeil isDarkTheme={isDarkTheme} />

      <HeroContent>
        <Motion.div
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
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
            An early-career software developer with hands-on experience in
            .NET development, web and mobile applications, and data analysis.
            Passionate about building practical solutions, collaborating with
            teams, and continuously learning new technologies.
          </Description>
        </Motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${props => props.isDarkTheme 
    ? 'linear-gradient(to bottom, #0a192f, #112240)' 
    : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  text-align: center;
`;

const BottomHandoffVeil = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 9rem;
  pointer-events: none;
  background: ${(props) =>
    props.isDarkTheme
      ? 'linear-gradient(0deg, rgba(8,20,38,0.92) 0%, rgba(10,25,47,0.45) 55%, rgba(10,25,47,0) 100%)'
      : 'linear-gradient(0deg, rgba(219,234,254,0.62) 0%, rgba(255,255,255,0) 100%)'};
  z-index: 0;
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