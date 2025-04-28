import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Import all Nutricare images
import nutrica1 from '../../assets/Nutricare/1.png';
import nutrica2 from '../../assets/Nutricare/2.png';
import nutrica3 from '../../assets/Nutricare/3.png';
import nutrica4 from '../../assets/Nutricare/4.png';
import nutrica5 from '../../assets/Nutricare/5.png';
import nutrica6 from '../../assets/Nutricare/6.png';
import nutrica7 from '../../assets/Nutricare/7.png';
import nutrica8 from '../../assets/Nutricare/8.png';
import nutrica9 from '../../assets/Nutricare/9.png';
import nutrica10 from '../../assets/Nutricare/10.png';
import nutrica11 from '../../assets/Nutricare/11.png';
import nutrica12 from '../../assets/Nutricare/12.png';
import nutrica13 from '../../assets/Nutricare/13.png';
import nutrica14 from '../../assets/Nutricare/14.png';
import nutrica15 from '../../assets/Nutricare/15.png';
import nutrica16 from '../../assets/Nutricare/16.png';
import nutrica17 from '../../assets/Nutricare/17.png';
import nutrica18 from '../../assets/Nutricare/18.png';
import nutrica19 from '../../assets/Nutricare/19.png';
import nutrica20 from '../../assets/Nutricare/20.png';

const Projects = () => {
  const { isDarkTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nutricaImages = [
    { id: 1, url: nutrica1 },
    { id: 2, url: nutrica2 },
    { id: 3, url: nutrica3 },
    { id: 4, url: nutrica4 },
    { id: 5, url: nutrica5 },
    { id: 6, url: nutrica6 },
    { id: 7, url: nutrica7 },
    { id: 8, url: nutrica8 },
    { id: 9, url: nutrica9 },
    { id: 10, url: nutrica10 },
    { id: 11, url: nutrica11 },
    { id: 12, url: nutrica12 },
    { id: 13, url: nutrica13 },
    { id: 14, url: nutrica14 },
    { id: 15, url: nutrica15 },
    { id: 16, url: nutrica16 },
    { id: 17, url: nutrica17 },
    { id: 18, url: nutrica18 },
    { id: 19, url: nutrica19 },
    { id: 20, url: nutrica20 }
  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? nutricaImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(nutricaImages[currentImageIndex]);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === nutricaImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(nutricaImages[currentImageIndex]);
  };

  return (
    <ProjectsContainer id="projects" isDarkTheme={isDarkTheme}>
      <ProjectsContent>
        <Title isDarkTheme={isDarkTheme}>Projects</Title>
        <ProjectCard isDarkTheme={isDarkTheme}>
          <ProjectHeader>
            <ProjectTitle isDarkTheme={isDarkTheme}>NutriCare</ProjectTitle>
            <ProjectDescription isDarkTheme={isDarkTheme}>
              A comprehensive nutrition tracking and meal planning application that helps users maintain a healthy lifestyle.
              Features include meal logging, consultation services, appointment scheduling, nutrition analysis, and personalized recommendations.
            </ProjectDescription>
          </ProjectHeader>
          <ImageGrid>
            {nutricaImages.slice(0, 4).map((image, index) => (
              <ImageWrapper
                key={image.id}
                onClick={() => handleImageClick(image, index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                isDarkTheme={isDarkTheme}
              >
                <ProjectImage src={image.url} alt={`NutriCare Screenshot ${image.id}`} />
                <ImageNumber isDarkTheme={isDarkTheme}>{image.id}</ImageNumber>
              </ImageWrapper>
            ))}
          </ImageGrid>
          <ViewMoreButton 
            href="https://fypnutricare.my.canva.site/" 
            target="_blank" 
            rel="noopener noreferrer"
            isDarkTheme={isDarkTheme}
          >
            View More
          </ViewMoreButton>
        </ProjectCard>
      </ProjectsContent>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <ModalContent
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <NavigationButton 
                left 
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                isDarkTheme={isDarkTheme}
              >
                ‹
              </NavigationButton>
              <NavigationButton 
                right 
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                isDarkTheme={isDarkTheme}
              >
                ›
              </NavigationButton>
              <ModalImage src={nutricaImages[currentImageIndex].url} alt={`NutriCare Screenshot ${currentImageIndex + 1}`} />
              <ImageCounter isDarkTheme={isDarkTheme}>
                {currentImageIndex + 1} / {nutricaImages.length}
              </ImageCounter>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ProjectsContent = styled.div`
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

const ProjectCard = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
`;

const ImageNumber = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.8)' : 'rgba(29, 78, 216, 0.8)'};
  color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const ViewMoreButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.isDarkTheme ? '#1d4ed8' : '#1d4ed8'};
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${props => props.isDarkTheme ? '#1e40af' : '#1e40af'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.isDarkTheme ? 'rgba(17, 34, 64, 0.8)' : 'rgba(17, 34, 64, 0.8)'};
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#60a5fa'};
  border: 2px solid ${props => props.isDarkTheme ? '#60a5fa' : '#60a5fa'};
  width: 50px;
  height: 50px;
  border-radius: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${props => props.isDarkTheme ? '#60a5fa' : '#60a5fa'};
    color: ${props => props.isDarkTheme ? '#112240' : '#112240'};
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 12px;
    ${props => props.left ? 'left: 5px;' : 'right: 5px;'}
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.isDarkTheme ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  color: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  z-index: 1001;
`;

export default Projects; 