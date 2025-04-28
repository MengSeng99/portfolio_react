import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
  const { isDarkTheme } = useTheme();
  const experiences = [
    {
      title: 'Network Consultant',
      company: 'Confianza IT Solutions',
      location: 'Johor Bahru',
      period: 'January 2020 - July 2020',
      duration: '7 mos',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25MjqFjlSQH8v5mLs2yJx0K8cixmsVIHyRA&s',
      responsibilities: [
        'Consulted clients on network-related issues and provided expert solutions.',
        'Proposed optimised network solutions to enhance performance and security.',
        'Engaged with clients to understand their needs and deliver effective recommendations.'
      ]
    },
    {
      title: 'IT & Project Marketing Executive',
      company: 'YouthsToday',
      location: 'Selangor',
      period: 'August 2022 - September 2022',
      duration: '2 mos',
      logo: 'https://www.jobsbank.com.my/wp-content/uploads/wp-job-board-pro-uploads/cropped_images/cropped_Youth-Today-PP-1651029365.jpg',
      responsibilities: [
        'Designed user interfaces and prototypes to enhance company workflow.',
        'Improved operational efficiency by refining existing processes.'
      ]
    },
    {
      title: 'Information Technology',
      company: 'TiongNam Logistics',
      location: 'Johor Bahru',
      period: 'Jan 2024 - April 2024',
      duration: '4 mos',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9dlgd4WRHmff3ZGgrdXWJqVkTX2KcZbvGA&s',
      responsibilities: [
        'Suggested ideas for software development to enhance efficiency.',
        'Developed solutions using Android applications, Python-based software, and web applications.',
        'Performed data analysis using Tableau to extract insights and support decision-making.'
      ]
    }
  ];

  return (
    <ExperienceContainer id="experience" isDarkTheme={isDarkTheme}>
      <ExperienceContent>
        <Title isDarkTheme={isDarkTheme}>Work Experience</Title>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ExperienceCard isDarkTheme={isDarkTheme}>
                <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />
                <ExperienceHeader>
                  <Position isDarkTheme={isDarkTheme}>
                    {exp.title}
                  </Position>
                  <Company isDarkTheme={isDarkTheme}>{exp.company}</Company>
                  <Location isDarkTheme={isDarkTheme}>{exp.location}</Location>
                  <Period isDarkTheme={isDarkTheme}>
                    {exp.period} ({exp.duration})
                  </Period>
                </ExperienceHeader>
                <Responsibilities>
                  {exp.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx} isDarkTheme={isDarkTheme}>
                      {resp}
                    </Responsibility>
                  ))}
                </Responsibilities>
              </ExperienceCard>
            </motion.div>
          ))}
        </ExperienceGrid>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const Position = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const Responsibilities = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Responsibility = styled.li`
  font-size: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  transition: color 0.3s ease;

  &:before {
    content: '•';
    color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
    position: absolute;
    left: 0;
  }
`;

export default Experience; 