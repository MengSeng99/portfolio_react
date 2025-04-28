import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import LinkedInPosts from './components/LinkedInPosts/LinkedInPosts';
import Contact from './components/Contact/Contact';
import { ThemeProvider } from './context/ThemeContext';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    background-color: ${props => props.theme === 'dark' ? '#0a192f' : '#ffffff'};
    color: ${props => props.theme === 'dark' ? '#e0e0e0' : '#333333'};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <LinkedInPosts />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
