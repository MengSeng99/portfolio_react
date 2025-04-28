import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SiFlutter, SiDotnet, SiFigma } from 'react-icons/si';

// Import NutriCare images
import nutrica1 from '../../assets/mobile/nutricare/1.png';
import nutrica2 from '../../assets/mobile/nutricare/2.png';
import nutrica3 from '../../assets/mobile/nutricare/3.png';
import nutrica4 from '../../assets/mobile/nutricare/4.png';
import nutrica5 from '../../assets/mobile/nutricare/5.png';
import nutrica6 from '../../assets/mobile/nutricare/6.png';
import nutrica7 from '../../assets/mobile/nutricare/7.png';
import nutrica8 from '../../assets/mobile/nutricare/8.png';
import nutrica9 from '../../assets/mobile/nutricare/9.png';
import nutrica10 from '../../assets/mobile/nutricare/10.png';
import nutrica11 from '../../assets/mobile/nutricare/11.png';
import nutrica12 from '../../assets/mobile/nutricare/12.png';
import nutrica13 from '../../assets/mobile/nutricare/13.png';
import nutrica14 from '../../assets/mobile/nutricare/14.png';
import nutrica15 from '../../assets/mobile/nutricare/15.png';
import nutrica16 from '../../assets/mobile/nutricare/16.png';
import nutrica17 from '../../assets/mobile/nutricare/17.png';
import nutrica18 from '../../assets/mobile/nutricare/18.png';
import nutrica19 from '../../assets/mobile/nutricare/19.png';
import nutrica20 from '../../assets/mobile/nutricare/20.png';

// Import JGH images
import jgh1 from '../../assets/web/jgh/1.jpeg';
import jgh2 from '../../assets/web/jgh/2.jpeg';
import jgh3 from '../../assets/web/jgh/3.jpeg';
import jgh4 from '../../assets/web/jgh/4.jpeg';
import jgh5 from '../../assets/web/jgh/5.jpeg';
import jgh6 from '../../assets/web/jgh/6.jpeg';
import jgh7 from '../../assets/web/jgh/7.jpeg';
import jgh8 from '../../assets/web/jgh/8.jpeg';
import jgh9 from '../../assets/web/jgh/9.jpeg';
import jgh10 from '../../assets/web/jgh/10.jpeg';

// Import YTODAY images
import yt1 from '../../assets/uiux/yt/1.png';
import yt2 from '../../assets/uiux/yt/2.png';
import yt3 from '../../assets/uiux/yt/3.png';
import yt4 from '../../assets/uiux/yt/4.png';
import yt5 from '../../assets/uiux/yt/5.png';
import yt6 from '../../assets/uiux/yt/6.png';
import yt7 from '../../assets/uiux/yt/7.png';
import yt8 from '../../assets/uiux/yt/8.png';
import yt9 from '../../assets/uiux/yt/9.png';
import yt10 from '../../assets/uiux/yt/10.png';

const Projects = () => {
  const { isDarkTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const nutricaImages = [
    { id: 1, url: nutrica1 }, { id: 2, url: nutrica2 }, { id: 3, url: nutrica3 },
    { id: 4, url: nutrica4 }, { id: 5, url: nutrica5 }, { id: 6, url: nutrica6 },
    { id: 7, url: nutrica7 }, { id: 8, url: nutrica8 }, { id: 9, url: nutrica9 },
    { id: 10, url: nutrica10 }, { id: 11, url: nutrica11 }, { id: 12, url: nutrica12 },
    { id: 13, url: nutrica13 }, { id: 14, url: nutrica14 }, { id: 15, url: nutrica15 },
    { id: 16, url: nutrica16 }, { id: 17, url: nutrica17 }, { id: 18, url: nutrica18 },
    { id: 19, url: nutrica19 }, { id: 20, url: nutrica20 }
  ];

  const jghImages = [
    { id: 1, url: jgh1 }, { id: 2, url: jgh2 }, { id: 3, url: jgh3 },
    { id: 4, url: jgh4 }, { id: 5, url: jgh5 }, { id: 6, url: jgh6 },
    { id: 7, url: jgh7 }, { id: 8, url: jgh8 }, { id: 9, url: jgh9 },
    { id: 10, url: jgh10 }
  ];

  const ytImages = [
    { id: 1, url: yt1 }, { id: 2, url: yt2 }, { id: 3, url: yt3 },
    { id: 4, url: yt4 }, { id: 5, url: yt5 }, { id: 6, url: yt6 },
    { id: 7, url: yt7 }, { id: 8, url: yt8 }, { id: 9, url: yt9 },
    { id: 10, url: yt10 }
  ];

  const projects = [
    {
      id: 'nutricare',
      title: 'NutriCare',
      description: 'A comprehensive nutrition tracking and meal planning application that helps users maintain a healthy lifestyle. Features include meal logging, consultation services, appointment scheduling, nutrition analysis, and personalized recommendations.',
      images: nutricaImages,
      type: 'mobile',
      tech: { icon: SiFlutter, name: 'Flutter' },
      link: 'https://fypnutricare.my.canva.site/'
    },
    {
      id: 'jgh',
      title: 'JuniorGeniusHub',
      description: 'An online math learning platform designed to help students improve their mathematical skills through interactive lessons and practice exercises.',
      images: jghImages,
      type: 'web',
      tech: { icon: SiDotnet, name: 'ASP.NET' },
      link: '#'
    },
    {
      id: 'ytoday',
      title: 'YTODAY User Panel',
      description: 'A user panel designed to enhance company workflow and improve efficiency through intuitive interface and streamlined processes.',
      images: ytImages,
      type: 'uiux',
      tech: { icon: SiFigma, name: 'Figma' },
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleImageClick = (images, index) => {
    setSelectedImage(images);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedImage.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedImage.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ProjectsContainer id="projects" isDarkTheme={isDarkTheme}>
      <ProjectsContent>
        <Title isDarkTheme={isDarkTheme}>Projects</Title>
        <FilterContainer>
          <FilterButton 
            onClick={() => setActiveFilter('all')}
            active={activeFilter === 'all'}
            isDarkTheme={isDarkTheme}
          >
            All
          </FilterButton>
          <FilterButton 
            onClick={() => setActiveFilter('web')}
            active={activeFilter === 'web'}
            isDarkTheme={isDarkTheme}
          >
            Web Development
          </FilterButton>
          <FilterButton 
            onClick={() => setActiveFilter('mobile')}
            active={activeFilter === 'mobile'}
            isDarkTheme={isDarkTheme}
          >
            Mobile Development
          </FilterButton>
          <FilterButton 
            onClick={() => setActiveFilter('uiux')}
            active={activeFilter === 'uiux'}
            isDarkTheme={isDarkTheme}
          >
            UI/UX Design
          </FilterButton>
        </FilterContainer>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} isDarkTheme={isDarkTheme}>
            <ProjectHeader>
              <ProjectTitle isDarkTheme={isDarkTheme}>
                {project.title}
                <TechStack>
                  <TechIcon isDarkTheme={isDarkTheme}>
                    <project.tech.icon />
                    {project.tech.name}
                  </TechIcon>
                </TechStack>
              </ProjectTitle>
              <ProjectDescription isDarkTheme={isDarkTheme}>
                {project.description}
              </ProjectDescription>
            </ProjectHeader>
            <ImageGrid isDarkTheme={isDarkTheme}>
              {project.images.map((image, index) => (
                <ImageWrapper
                  key={image.id}
                  onClick={() => handleImageClick(project.images, index)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  isDarkTheme={isDarkTheme}
                >
                  <ProjectImage src={image.url} alt={`${project.title} Screenshot ${image.id}`} />
                  <ImageNumber isDarkTheme={isDarkTheme}>{image.id}</ImageNumber>
                </ImageWrapper>
              ))}
            </ImageGrid>
            {project.id === 'nutricare' && (
              <ViewMoreButton 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                isDarkTheme={isDarkTheme}
              >
                View More
              </ViewMoreButton>
            )}
          </ProjectCard>
        ))}
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
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                isDarkTheme={isDarkTheme}
              >
                ‹
              </NavigationButton>
              <NavigationButton 
                right 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                isDarkTheme={isDarkTheme}
              >
                ›
              </NavigationButton>
              <ModalImage 
                src={selectedImage[currentImageIndex].url} 
                alt={`Screenshot ${selectedImage[currentImageIndex].id}`} 
              />
              <ImageCounter isDarkTheme={isDarkTheme}>
                {currentImageIndex + 1} / {selectedImage.length}
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.1)' : 'rgba(29, 78, 216, 0.1)'};
  border-radius: 9999px;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;
`;

const ImageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'} transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  height: 200px;
  min-width: 300px;
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  flex-shrink: 0;

  @media (max-width: 768px) {
    min-width: 250px;
    height: 180px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  max-height: 80vh;
  object-fit: contain;
  margin: 0 auto;
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
  background: ${props => props.isDarkTheme ? 'rgba(17, 34, 64, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
    color: ${props => props.isDarkTheme ? '#112240' : '#ffffff'};
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
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

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  background: ${props => props.active 
    ? props.isDarkTheme ? '#60a5fa' : '#1d4ed8'
    : 'transparent'};
  color: ${props => props.active 
    ? props.isDarkTheme ? '#112240' : '#ffffff'
    : props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.1)' : 'rgba(29, 78, 216, 0.1)'};
  }
`;

export default Projects; 