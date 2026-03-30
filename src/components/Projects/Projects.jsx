import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SiFlutter, SiDotnet, SiFigma, SiKotlin } from 'react-icons/si';

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

// Import APFood images
import apfood1 from '../../assets/mobile/apfood/1.png';
import apfood2 from '../../assets/mobile/apfood/2.png';
import apfood3 from '../../assets/mobile/apfood/3.png';
import apfood4 from '../../assets/mobile/apfood/4.png';
import apfood5 from '../../assets/mobile/apfood/5.png';
import apfood6 from '../../assets/mobile/apfood/6.png';
import apfood7 from '../../assets/mobile/apfood/7.png';
import apfood8 from '../../assets/mobile/apfood/8.png';
import apfood9 from '../../assets/mobile/apfood/9.png';
import apfood10 from '../../assets/mobile/apfood/10.png';

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
import yt11 from '../../assets/uiux/yt/11.png';

// Import Asadi images
import asadi1 from '../../assets/uiux/Asadi/1.png';
import asadi2 from '../../assets/uiux/Asadi/2.png';
import asadi3 from '../../assets/uiux/Asadi/3.png';
import asadi4 from '../../assets/uiux/Asadi/4.png';
import asadi5 from '../../assets/uiux/Asadi/5.png';
import asadi6 from '../../assets/uiux/Asadi/6.png';
import asadi7 from '../../assets/uiux/Asadi/7.png';
import asadi8 from '../../assets/uiux/Asadi/8.png';
import asadi9 from '../../assets/uiux/Asadi/9.png';

// Import Legal101 images
import legal1 from '../../assets/uiux/Legal101/1.png';
import legal2 from '../../assets/uiux/Legal101/2.png';
import legal3 from '../../assets/uiux/Legal101/3.png';
import legal4 from '../../assets/uiux/Legal101/4.png';
import legal5 from '../../assets/uiux/Legal101/5.png';
import legal6 from '../../assets/uiux/Legal101/6.png';
import legal7 from '../../assets/uiux/Legal101/7.png';
import legal8 from '../../assets/uiux/Legal101/8.png';

// Import APCard images
import apcard1 from '../../assets/uiux/APCard/1.png';
import apcard2 from '../../assets/uiux/APCard/2.png';
import apcard3 from '../../assets/uiux/APCard/3.png';
import apcard4 from '../../assets/uiux/APCard/4.png';
import apcard5 from '../../assets/uiux/APCard/5.png';
import apcard6 from '../../assets/uiux/APCard/6.png';
import apcard7 from '../../assets/uiux/APCard/7.png';

// Import NutriMate images
import nutrimate1 from '../../assets/uiux/NutriMate/1.png';
import nutrimate2 from '../../assets/uiux/NutriMate/2.png';
import nutrimate3 from '../../assets/uiux/NutriMate/3.png';
import nutrimate4 from '../../assets/uiux/NutriMate/4.png';
import nutrimate5 from '../../assets/uiux/NutriMate/5.png';
import nutrimate6 from '../../assets/uiux/NutriMate/6.png';
import nutrimate7 from '../../assets/uiux/NutriMate/7.png';
import nutrimate8 from '../../assets/uiux/NutriMate/8.png';
import nutrimate9 from '../../assets/uiux/NutriMate/9.png';
import nutrimate10 from '../../assets/uiux/NutriMate/10.png';
import nutrimate11 from '../../assets/uiux/NutriMate/11.png';
import nutrimate12 from '../../assets/uiux/NutriMate/12.png';

const Projects = () => {
  const { isDarkTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const nutricaImages = [
    { id: 1, url: nutrica1 }, { id: 2, url: nutrica2 }, { id: 3, url: nutrica3 },
    { id: 4, url: nutrica4 }, { id: 5, url: nutrica5 }, { id: 6, url: nutrica6 },
    { id: 7, url: nutrica7 }, { id: 8, url: nutrica8 }, { id: 9, url: nutrica9 },
    { id: 10, url: nutrica10 }, { id: 11, url: nutrica11 }, { id: 12, url: nutrica12 },
    { id: 13, url: nutrica13 }, { id: 14, url: nutrica14 }, { id: 15, url: nutrica15 },
    { id: 16, url: nutrica16 }, { id: 17, url: nutrica17 }, { id: 18, url: nutrica18 },
    { id: 19, url: nutrica19 }, { id: 20, url: nutrica20 }
  ];

  const apfoodImages = [
    { id: 1, url: apfood1 }, { id: 2, url: apfood2 }, { id: 3, url: apfood3 },
    { id: 4, url: apfood4 }, { id: 5, url: apfood5 }, { id: 6, url: apfood6 },
    { id: 7, url: apfood7 }, { id: 8, url: apfood8 }, { id: 9, url: apfood9 },
    { id: 10, url: apfood10 }
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
    { id: 10, url: yt10 }, { id: 11, url: yt11 }
  ];

  const asadiImages = [
    { id: 1, url: asadi1 }, { id: 2, url: asadi2 }, { id: 3, url: asadi3 },
    { id: 4, url: asadi4 }, { id: 5, url: asadi5 }, { id: 6, url: asadi6 },
    { id: 7, url: asadi7 }, { id: 8, url: asadi8 }, { id: 9, url: asadi9 }
  ];

  const legalImages = [
    { id: 1, url: legal1 }, { id: 2, url: legal2 }, { id: 3, url: legal3 },
    { id: 4, url: legal4 }, { id: 5, url: legal5 }, { id: 6, url: legal6 },
    { id: 7, url: legal7 }, { id: 8, url: legal8 }
  ];

  const apcardImages = [
    { id: 1, url: apcard1 }, { id: 2, url: apcard2 }, { id: 3, url: apcard3 },
    { id: 4, url: apcard4 }, { id: 5, url: apcard5 }, { id: 6, url: apcard6 },
    { id: 7, url: apcard7 }
  ];

  const nutrimateImages = [
    { id: 1, url: nutrimate1 }, { id: 2, url: nutrimate2 }, { id: 3, url: nutrimate3 },
    { id: 4, url: nutrimate4 }, { id: 5, url: nutrimate5 }, { id: 6, url: nutrimate6 },
    { id: 7, url: nutrimate7 }, { id: 8, url: nutrimate8 }, { id: 9, url: nutrimate9 },
    { id: 10, url: nutrimate10 }, { id: 11, url: nutrimate11 }, { id: 12, url: nutrimate12 }
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
      id: 'apfood',
      title: 'APFood',
      description: 'A food delivery and restaurant management application that connects customers with local restaurants. Features include real-time order tracking, menu management, payment processing, and restaurant analytics.',
      images: apfoodImages,
      type: 'mobile',
      tech: { icon: SiKotlin, name: 'Kotlin' },
      link: '#'
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
    },
    {
      id: 'asadi',
      title: 'Asadi',
      description: 'A modern and intuitive user interface design for a business platform, focusing on user experience and visual appeal.',
      images: asadiImages,
      type: 'uiux',
      tech: { icon: SiFigma, name: 'Figma' },
      link: '#'
    },
    {
      id: 'legal101',
      title: 'Legal101',
      description: 'A user-friendly interface design for a legal consultation platform, emphasizing accessibility and ease of use.',
      images: legalImages,
      type: 'uiux',
      tech: { icon: SiFigma, name: 'Figma' },
      link: '#'
    },
    {
      id: 'apcard',
      title: 'APCard',
      description: 'A sleek and modern design for a digital card management system, focusing on user interaction and visual hierarchy.',
      images: apcardImages,
      type: 'uiux',
      tech: { icon: SiFigma, name: 'Figma' },
      link: '#'
    },
    {
      id: 'nutrimate',
      title: 'NutriMate',
      description: 'A comprehensive nutrition tracking app design with a focus on user engagement and data visualization.',
      images: nutrimateImages,
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

  const handleTouchStart = (e) => {
    const x = e.touches[0].clientX;
    setTouchStartX(x);
    setTouchEndX(x);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      handleNextImage();
    } else if (swipeDistance < -minSwipeDistance) {
      handlePrevImage();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <ProjectsContainer id="projects" isDarkTheme={isDarkTheme}>
      <TopLeftGlow isDarkTheme={isDarkTheme} />
      <BottomRightGlow isDarkTheme={isDarkTheme} />

      <ProjectsContent>
        <SectionHeading>
          <Title isDarkTheme={isDarkTheme}>Projects</Title>
          <SectionSubtitle isDarkTheme={isDarkTheme}>
            A selection of web, mobile, and UI/UX work delivered across academic and professional projects.
          </SectionSubtitle>
        </SectionHeading>

        <FilterContainer isDarkTheme={isDarkTheme}>
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

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} isDarkTheme={isDarkTheme}>
              <ProjectMedia
                isDarkTheme={isDarkTheme}
                onClick={() => handleImageClick(project.images, 0)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectImage src={project.images[0].url} alt={`${project.title} cover`} />
                <MediaOverlay>
                  <MediaBadge isDarkTheme={isDarkTheme}>{project.images.length} Screens</MediaBadge>
                  <MediaHint>Tap to preview</MediaHint>
                </MediaOverlay>
              </ProjectMedia>

              <ProjectBody>
                <ProjectHeader>
                  <ProjectTitle isDarkTheme={isDarkTheme}>{project.title}</ProjectTitle>
                  <TechStack>
                    <TechIcon isDarkTheme={isDarkTheme}>
                      <project.tech.icon />
                      {project.tech.name}
                    </TechIcon>
                    <TypeTag isDarkTheme={isDarkTheme}>{project.type.toUpperCase()}</TypeTag>
                  </TechStack>
                  <ProjectDescription isDarkTheme={isDarkTheme}>
                    {project.description}
                  </ProjectDescription>
                </ProjectHeader>

                <ImageGrid isDarkTheme={isDarkTheme}>
                  {project.images.slice(0, 6).map((image, index) => (
                    <ImageWrapper
                      key={image.id}
                      onClick={() => handleImageClick(project.images, index)}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                      isDarkTheme={isDarkTheme}
                    >
                      <ProjectImage src={image.url} alt={`${project.title} Screenshot ${image.id}`} />
                      <ImageNumber isDarkTheme={isDarkTheme}>{image.id}</ImageNumber>
                    </ImageWrapper>
                  ))}
                </ImageGrid>

                <ActionRow>
                  {project.link !== '#' ? (
                    <ViewMoreButton 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      isDarkTheme={isDarkTheme}
                    >
                      View Project
                    </ViewMoreButton>
                  ) : (
                    <MutedText isDarkTheme={isDarkTheme}></MutedText>
                  )}
                </ActionRow>
              </ProjectBody>
            </ProjectCard>
          ))}
        </ProjectsGrid>
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
              isDarkTheme={isDarkTheme}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <CloseButton onClick={handleCloseModal} isDarkTheme={isDarkTheme} aria-label="Close preview">
                <CloseGlyph aria-hidden="true">×</CloseGlyph>
                <CloseLabel>Close</CloseLabel>
              </CloseButton>
              <NavigationButton 
                left 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                isDarkTheme={isDarkTheme}
                aria-label="Previous image"
              >
                <NavArrow aria-hidden="true">‹</NavArrow>
                <NavText>Prev</NavText>
              </NavigationButton>
              <NavigationButton 
                right 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                isDarkTheme={isDarkTheme}
                aria-label="Next image"
              >
                <NavText>Next</NavText>
                <NavArrow aria-hidden="true">›</NavArrow>
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

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8px, -12px, 0) scale(1.04); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`;

const ProjectsContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 5%;
  background: ${props => (props.isDarkTheme
    ? '#0a192f'
    : '#ffffff')};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const TopLeftGlow = styled.span`
  position: absolute;
  top: -6rem;
  left: -4rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  pointer-events: none;
  background: ${props => (props.isDarkTheme ? 'rgba(30,64,175,0.2)' : 'rgba(30,64,175,0.12)')};
  filter: blur(30px);
  animation: ${drift} 10s ease-in-out infinite reverse;
`;

const BottomRightGlow = styled.span`
  position: absolute;
  bottom: -7rem;
  right: -4rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  pointer-events: none;
  background: ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.19)' : 'rgba(96,165,250,0.13)')};
  filter: blur(26px);
  animation: ${drift} 9s ease-in-out infinite;
`;

const ProjectsContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  gap: 1.6rem;
`;

const SectionHeading = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const SectionSubtitle = styled.p`
  max-width: 760px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#4b5563'};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 18px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.2)' : 'rgba(37, 99, 235, 0.14)'};
  box-shadow: ${props => props.isDarkTheme ? '0 12px 32px rgba(2, 6, 23, 0.35)' : '0 14px 30px rgba(15, 23, 42, 0.08)'};
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.3s ease;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.isDarkTheme ? '0 16px 34px rgba(2, 6, 23, 0.42)' : '0 20px 36px rgba(15, 23, 42, 0.12)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.3rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectMedia = styled(motion.button)`
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  height: 220px;
  background: ${props => props.isDarkTheme ? 'rgba(30, 41, 59, 0.55)' : '#f3f4f6'};
  border-bottom: 1px solid ${props => props.isDarkTheme ? 'rgba(148, 163, 184, 0.25)' : '#e5e7eb'};

  @media (max-width: 768px) {
    height: 190px;
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.65rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to top, rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0));
`;

const MediaBadge = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.isDarkTheme ? '#dbeafe' : '#eff6ff'};
  background: ${props => props.isDarkTheme ? 'rgba(30, 64, 175, 0.82)' : 'rgba(29, 78, 216, 0.82)'};
  border-radius: 999px;
  padding: 0.28rem 0.62rem;
`;

const MediaHint = styled.span`
  color: #e2e8f0;
  font-size: 0.76rem;
  font-weight: 500;
`;

const ProjectBody = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.9rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 0;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 0.9rem;
  background: ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.1)' : 'rgba(29, 78, 216, 0.1)'};
  border-radius: 9999px;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.98rem;
  line-height: 1.68;
  margin: 0;
  display: block;
  max-width: 100%;
  white-space: normal;
  overflow: visible;
  word-break: break-word;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;
`;

const TypeTag = styled.span`
  padding: 0.38rem 0.72rem;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  border-radius: 999px;
  color: ${props => props.isDarkTheme ? '#dbeafe' : '#1e40af'};
  background: ${props => props.isDarkTheme ? 'rgba(30, 64, 175, 0.56)' : 'rgba(191, 219, 254, 0.6)'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(147, 197, 253, 0.36)' : 'rgba(59, 130, 246, 0.35)'};
`;

const ImageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.7rem;
  margin-top: 0.1rem;
  padding-bottom: 0.45rem;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'} transparent;
  scroll-snap-type: x mandatory;

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
    gap: 0.65rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  height: 120px;
  min-width: 160px;
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  flex-shrink: 0;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    min-width: 150px;
    height: 110px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageNumber = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${props => props.isDarkTheme ? 'rgba(30, 64, 175, 0.88)' : 'rgba(29, 78, 216, 0.88)'};
  color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(3, 7, 18, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
`;

const ModalContent = styled(motion.div)`
  position: relative;
  width: min(1000px, 96vw);
  max-height: 92vh;
  padding: 1rem 4.5rem 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: ${props => props.isDarkTheme ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.18)'};
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(148, 163, 184, 0.28)' : 'rgba(255, 255, 255, 0.35)'};

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-height: none;
    border-radius: 0;
    padding: 0.8rem 0.9rem 5.4rem;
    background: transparent;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  height: 44px;
  border-radius: 999px;
  padding: 0 0.85rem;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.45)' : 'rgba(191, 219, 254, 0.75)'};
  background: ${props => props.isDarkTheme ? 'rgba(30, 41, 59, 0.72)' : 'rgba(30, 64, 175, 0.88)'};
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  z-index: 1001;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.06);
    background: ${props => props.isDarkTheme ? 'rgba(59, 130, 246, 0.8)' : 'rgba(37, 99, 235, 0.95)'};
  }

  @media (max-width: 768px) {
    width: 44px;
    padding: 0;
    border-radius: 50%;
  }
`;

const CloseGlyph = styled.span`
  font-size: 1.35rem;
  line-height: 1;
`;

const CloseLabel = styled.span`
  font-size: 0.82rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-height: calc(100vh - 120px);
  }
`;

const ViewMoreButton = styled.a`
  display: inline-block;
  padding: 0.62rem 1rem;
  background-color: ${props => props.isDarkTheme ? '#1d4ed8' : '#1d4ed8'};
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 9px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${props => props.isDarkTheme ? '#1e40af' : '#1e40af'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

const MutedText = styled.span`
  font-size: 0.82rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#6b7280'};
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.isDarkTheme ? 'rgba(15, 23, 42, 0.76)' : 'rgba(30, 64, 175, 0.9)'};
  color: #ffffff;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.45)' : 'rgba(191, 219, 254, 0.75)'};
  min-width: 94px;
  height: 44px;
  border-radius: 999px;
  padding: 0 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1001;
  backdrop-filter: blur(8px);

  &:hover {
    transform: translateY(-50%) scale(1.03);
    background: ${props => props.isDarkTheme ? 'rgba(37, 99, 235, 0.92)' : 'rgba(29, 78, 216, 0.95)'};
  }

  ${props => props.left ? 'left: 12px;' : 'right: 12px;'}

  @media (max-width: 768px) {
    top: auto;
    bottom: 18px;
    transform: none;
    min-width: 102px;
    height: 42px;
    ${props => props.left ? 'left: 18px;' : 'right: 18px;'}

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const NavArrow = styled.span`
  font-size: 1.05rem;
  line-height: 1;
`;

const NavText = styled.span`
  letter-spacing: 0.02em;
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.isDarkTheme ? 'rgba(15, 23, 42, 0.78)' : 'rgba(30, 64, 175, 0.88)'};
  color: #e0e0e0;
  padding: 0.42rem 0.95rem;
  border-radius: 999px;
  font-size: 0.92rem;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.45)' : 'rgba(191, 219, 254, 0.75)'};
  z-index: 1001;

  @media (max-width: 768px) {
    bottom: 20px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  width: 100%;
  margin-bottom: 0.2rem;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.12rem 0.12rem 0.45rem;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FilterButton = styled.button`
  padding: 0.56rem 0.95rem;
  flex: 0 0 auto;
  border-radius: 9999px;
  border: 1px solid ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  background: ${props => props.active 
    ? props.isDarkTheme ? '#60a5fa' : '#1d4ed8'
    : 'transparent'};
  color: ${props => props.active 
    ? props.isDarkTheme ? '#112240' : '#ffffff'
    : props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${props => props.isDarkTheme ? 'rgba(96, 165, 250, 0.1)' : 'rgba(29, 78, 216, 0.1)'};
  }
`;

export default Projects; 