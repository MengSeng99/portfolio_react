import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

const CareerInterestsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.isDarkTheme ? '#64ffda' : '#2563eb'};
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: ${props => props.isDarkTheme ? '#8892b0' : '#4b5563'};
`;

const PositionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PositionCard = styled(motion.div)`
  background-color: ${props => props.isDarkTheme ? '#112240' : '#f3f4f6'};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PositionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.isDarkTheme ? '#64ffda' : '#2563eb'};
`;

const PositionDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const LocationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
`;

const LocationItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "📍";
  }
`;

const PreferenceTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.isDarkTheme ? '#1d4ed8' : '#dbeafe'};
  color: ${props => props.isDarkTheme ? '#ffffff' : '#1e40af'};
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

const CareerInterests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDarkTheme } = useTheme();

  const positions = [
    {
      title: "Software Developer",
      description: "Seeking opportunities as a Software Developer with a focus on front-end development. Open to full-stack roles with a preference for front-end work.",
      locations: ["Singapore (Visa sponsorship required)", "Johor Bahru"],
      preference: "Primary"
    },
    {
      title: "QA Tester",
      description: "Interested in starting a career in Quality Assurance testing. Eager to learn and grow in software testing methodologies and best practices. No prior experience required.",
      locations: ["Singapore (Visa sponsorship required)", "Johor Bahru"],
      preference: "Secondary"
    },
    {
      title: "Mobile App Developer",
      description: "Looking for opportunities in mobile application development. Interested in working with Flutter or native mobile development technologies.",
      locations: ["Singapore (Visa sponsorship required)", "Johor Bahru"],
      preference: "Secondary"
    }
  ];

  return (
    <CareerInterestsContainer id="career-interests" isDarkTheme={isDarkTheme}>
      <Title isDarkTheme={isDarkTheme}>Career Interests</Title>
      <Subtitle isDarkTheme={isDarkTheme}>Positions I am actively seeking for my professional growth</Subtitle>
      <PositionsGrid ref={ref}>
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            isDarkTheme={isDarkTheme}
          >
            <PositionTitle isDarkTheme={isDarkTheme}>
              {position.title}
              <PreferenceTag isDarkTheme={isDarkTheme}>{position.preference}</PreferenceTag>
            </PositionTitle>
            <PositionDescription>{position.description}</PositionDescription>
            <LocationList>
              {position.locations.map((location, locIndex) => (
                <LocationItem key={locIndex}>{location}</LocationItem>
              ))}
            </LocationList>
          </PositionCard>
        ))}
      </PositionsGrid>
    </CareerInterestsContainer>
  );
};

export default CareerInterests; 