import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const { isDarkTheme } = useTheme();
  const educationData = [
    {
      degree: 'Secondary School',
      school: 'SMK SERI PERLING',
      year: '2015 - 2019',
      cgpa: 'SPM: 7A 2B',
      specialization: 'Accounting stream with additional mathematics and economics'
    },
    {
      degree: 'Diploma in Information & Communication Technology',
      school: 'Asia Pacific University',
      year: '2017 - 2020',
      cgpa: 'CGPA: 3.53',
      specialization: 'Software Engineering'
    },
    {
      degree: 'Bachelor of Science (Hons) in Information Technology',
      school: 'Asia Pacific University',
      year: '2020 - 2023',
      cgpa: 'CGPA: 3.67',
      specialization: 'Mobile Technology'
    }
  ];

  return (
    <EducationContainer id="education" isDarkTheme={isDarkTheme}>
      <EducationContent>
        <Title isDarkTheme={isDarkTheme}>Education</Title>
        <EducationGrid>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <EducationCard isDarkTheme={isDarkTheme}>
                <Degree isDarkTheme={isDarkTheme}>{edu.degree}</Degree>
                <School isDarkTheme={isDarkTheme}>{edu.school}</School>
                <Year isDarkTheme={isDarkTheme}>{edu.year}</Year>
                <Cgpa isDarkTheme={isDarkTheme}>{edu.cgpa}</Cgpa>
                <Specialization isDarkTheme={isDarkTheme}>{edu.specialization}</Specialization>
              </EducationCard>
            </motion.div>
          ))}
        </EducationGrid>
      </EducationContent>
    </EducationContainer>
  );
};

const EducationContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const EducationContent = styled.div`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const School = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Year = styled.p`
  font-size: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const Cgpa = styled.p`
  font-size: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;
`;

const Specialization = styled.p`
  font-size: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-top: 0.5rem;
  transition: color 0.3s ease;
`;

export default Education; 