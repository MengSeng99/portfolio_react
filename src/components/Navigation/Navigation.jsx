import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'education', 'skills', 'experience', 'projects', 'linkedin', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Education', href: '#education' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Career Interests', href: '#career-interests' },
    { title: 'LinkedIn', href: '#linkedin' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavContainer scrolled={scrolled} isDarkTheme={isDarkTheme}>
      <NavContent>
        <Logo href="#home" onClick={(e) => handleClick(e, '#home')} scrolled={scrolled} isDarkTheme={isDarkTheme}>
          Louis
        </Logo>
        <NavRight>
          <ThemeToggle onClick={toggleTheme} isDarkTheme={isDarkTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <MenuButton onClick={() => setIsOpen(!isOpen)} scrolled={scrolled} isDarkTheme={isDarkTheme}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </NavRight>
        <NavMenu isOpen={isOpen} isDarkTheme={isDarkTheme}>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavItem 
                href={item.href} 
                onClick={(e) => handleClick(e, item.href)}
                active={activeSection === item.href.substring(1)}
                scrolled={scrolled}
                isDarkTheme={isDarkTheme}
              >
                {item.title}
              </NavItem>
            </motion.div>
          ))}
        </NavMenu>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled 
    ? props.isDarkTheme 
      ? 'rgba(17, 34, 64, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)'
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${props => props.isDarkTheme ? '#ffffff' : '#112240'};
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.isDarkTheme ? '#ffffff' : '#112240'};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  span {
    display: block;
    width: 25px;
    height: 2px;
    margin: 5px 0;
    background-color: ${props => props.isDarkTheme ? '#ffffff' : '#112240'};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: ${props => props.isDarkTheme ? '#112240' : '#ffffff'};
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
  }
`;

const NavItem = styled(motion.a)`
  color: ${props => props.isDarkTheme ? '#ffffff' : '#112240'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

export default Navigation; 