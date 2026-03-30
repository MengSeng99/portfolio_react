import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 110 : -110,
    opacity: 0,
    rotate: direction > 0 ? 2.2 : -2.2,
    scale: 0.96
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 32 },
      opacity: { duration: 0.25 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 110 : -110,
    opacity: 0,
    rotate: direction < 0 ? 2.2 : -2.2,
    scale: 0.96,
    transition: { duration: 0.24 }
  })
};

const Experience = () => {
  const { isDarkTheme } = useTheme();
  const [deckState, setDeckState] = useState([0, 0]);

  const experiences = [
    {
      title: 'Network Consultant',
      company: 'Confianza IT Solutions',
      location: 'Johor Bahru',
      period: 'January 2020 - July 2020',
      employmentType: 'Part-time',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25MjqFjlSQH8v5mLs2yJx0K8cixmsVIHyRA&s',
      keyProject: 'Client Network Optimization Blueprint',
      techStack: ['Cisco', 'Network Security', 'Troubleshooting', 'Client Consulting'],
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
      employmentType: 'Internship',
      logo: 'https://www.youthstoday.com/wp-content/uploads/2021/01/logo_youthstoday.png',
      keyProject: 'Workflow UI Revamp Initiative',
      techStack: ['UI Design', 'Prototyping', 'Process Improvement'],
      responsibilities: [
        'Designed user interfaces and prototypes to enhance company workflow.',
        'Improved operational efficiency by refining existing processes.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'TiongNam Logistics',
      location: 'Johor Bahru',
      period: 'Jan 2024 - April 2024',
      employmentType: 'Internship',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9dlgd4WRHmff3ZGgrdXWJqVkTX2KcZbvGA&s',
      keyProject: 'Operations Support Tools Suite',
      techStack: ['Android', 'Python', 'Web Development', 'Tableau'],
      responsibilities: [
        'Suggested ideas for software development to enhance efficiency.',
        'Developed solutions using Android applications, Python-based software, and web applications.',
        'Performed data analysis using Tableau to extract insights and support decision-making.'
      ]
    },
    {
      title: 'Junior .NET Developer',
      company: 'Maybank Ageas Holdings Berhad (MAHB) - Etiqa Insurance & Takaful',
      location: 'Johor Bahru',
      period: 'June 2025 - Present',
      employmentType: 'Contract',
      logo: 'https://100comments.com/wp-content/uploads/2018/05/2.-Etiqa-Ezy-Life-Secure.png',
      isCurrent: true,
      keyProject: 'Policy and Claims Workflow Modernization',
      techStack: ['ASP.NET Core', 'C#', 'SQL Server', 'REST API', 'JavaScript', 'Git'],
      responsibilities: [
        'Develop and maintain end-to-end insurance modules using ASP.NET Core, C#, and SQL Server to support secure policy and claims operations.',
        'Build responsive frontend pages integrated with REST APIs, improving usability and speeding up internal policy processing workflows.',
        'Work closely with QA and business teams to release reliable features, resolve production issues, and continuously optimize system performance.'
      ]
    }
  ];

  const currentRole = experiences.find((exp) => exp.isCurrent) || experiences[experiences.length - 1];
  const archiveRoles = experiences.filter((exp) => exp !== currentRole);

  const [activeIndex, direction] = deckState;
  const currentArchive = archiveRoles[activeIndex] || archiveRoles[0];

  const paginateArchive = (newDirection) => {
    if (archiveRoles.length === 0) return;

    setDeckState(([prev]) => {
      const next = (prev + newDirection + archiveRoles.length) % archiveRoles.length;
      return [next, newDirection];
    });
  };

  const onCardDragEnd = (_, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -5500) {
      paginateArchive(1);
    } else if (swipe > 5500) {
      paginateArchive(-1);
    }
  };

  return (
    <ExperienceSection id="experience" isDarkTheme={isDarkTheme}>
      <TopRightGlow isDarkTheme={isDarkTheme} />
      <AnimatedGlowBottom isDarkTheme={isDarkTheme} />

      <ContentWrap>
        <SectionHeader>
          <Kicker isDarkTheme={isDarkTheme}>Experience Studio</Kicker>
          <Title isDarkTheme={isDarkTheme}>Work Experience</Title>
          <SubTitle isDarkTheme={isDarkTheme}>
            A showcase of my professional journey, highlighting key roles, projects, and the impact I've made in each position.
          </SubTitle>
        </SectionHeader>

        <LayoutGrid>
          <FeaturedCard
            as={motion.article}
            isDarkTheme={isDarkTheme}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
          >
            <ShineOverlay />
            <FeaturedHeader>
              <LogoSlot isDarkTheme={isDarkTheme}>
                <CompanyLogo src={currentRole.logo} alt={`${currentRole.company} logo`} />
              </LogoSlot>
              <FeaturedIdentity>
                <RoleRow>
                  <RoleTitle isDarkTheme={isDarkTheme}>{currentRole.title}</RoleTitle>
                  <CurrentBadge>Current</CurrentBadge>
                </RoleRow>
                <CompanyName isDarkTheme={isDarkTheme}>{currentRole.company}</CompanyName>
                <MetaRow>
                  <MetaPill isDarkTheme={isDarkTheme}>{currentRole.period}</MetaPill>
                  <MetaPill isDarkTheme={isDarkTheme}>{currentRole.employmentType}</MetaPill>
                  <MetaPill isDarkTheme={isDarkTheme}>{currentRole.location}</MetaPill>
                </MetaRow>
              </FeaturedIdentity>
            </FeaturedHeader>

            <ProjectNote isDarkTheme={isDarkTheme}>Key Project: {currentRole.keyProject}</ProjectNote>

            <StackRow>
              {currentRole.techStack.map((tech) => (
                <TechTag key={tech} isDarkTheme={isDarkTheme}>{tech}</TechTag>
              ))}
            </StackRow>

            <ResponsibilityList>
              {currentRole.responsibilities.map((item) => (
                <ResponsibilityItem key={item} isDarkTheme={isDarkTheme}>{item}</ResponsibilityItem>
              ))}
            </ResponsibilityList>
          </FeaturedCard>

          <DeckPanel isDarkTheme={isDarkTheme}>
            <DeckHeader>
              <DeckTitle isDarkTheme={isDarkTheme}>Journey Deck</DeckTitle>
              <DeckHint isDarkTheme={isDarkTheme}>Swipe left or right</DeckHint>
            </DeckHeader>

            {currentArchive && (
              <DeckViewport>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <DeckCard
                    key={`${currentArchive.company}-${currentArchive.title}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.88}
                    onDragEnd={onCardDragEnd}
                    isDarkTheme={isDarkTheme}
                    whileHover={{ scale: 1.015 }}
                  >
                    <DeckTop>
                      <MiniLogo src={currentArchive.logo} alt={`${currentArchive.company} logo`} />
                      <DeckMeta>
                        <DeckRole isDarkTheme={isDarkTheme}>{currentArchive.title}</DeckRole>
                        <DeckCompany isDarkTheme={isDarkTheme}>{currentArchive.company}</DeckCompany>
                        <DeckInfo isDarkTheme={isDarkTheme}>
                          {currentArchive.period} • {currentArchive.location}
                        </DeckInfo>
                      </DeckMeta>
                    </DeckTop>

                    <DeckProject isDarkTheme={isDarkTheme}>{currentArchive.keyProject}</DeckProject>

                    <DeckTech>
                      {currentArchive.techStack.slice(0, 4).map((tech) => (
                        <DeckTechTag key={tech} isDarkTheme={isDarkTheme}>{tech}</DeckTechTag>
                      ))}
                    </DeckTech>

                    <DeckDetailList
                      as={motion.ul}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {currentArchive.responsibilities.map((item) => (
                        <DeckDetailItem key={item} isDarkTheme={isDarkTheme}>{item}</DeckDetailItem>
                      ))}
                    </DeckDetailList>
                  </DeckCard>
                </AnimatePresence>
              </DeckViewport>
            )}

            <DeckControls>
              <ControlButton
                type="button"
                onClick={() => paginateArchive(-1)}
                isDarkTheme={isDarkTheme}
                aria-label="Previous role"
              >
                Prev
              </ControlButton>

              <ProgressDots>
                {archiveRoles.map((role, idx) => (
                  <DotButton
                    key={`${role.company}-${role.title}`}
                    type="button"
                    isActive={idx === activeIndex}
                    isDarkTheme={isDarkTheme}
                    onClick={() => {
                      setDeckState([idx, idx > activeIndex ? 1 : -1]);
                    }}
                    aria-label={`View role ${idx + 1}`}
                  />
                ))}
              </ProgressDots>

              <ControlButton
                type="button"
                onClick={() => paginateArchive(1)}
                isDarkTheme={isDarkTheme}
                aria-label="Next role"
              >
                Next
              </ControlButton>
            </DeckControls>
          </DeckPanel>
        </LayoutGrid>
      </ContentWrap>
    </ExperienceSection>
  );
};

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8px, -12px, 0) scale(1.04); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`;

const sweep = keyframes`
  0% { transform: translateX(-140%); }
  100% { transform: translateX(180%); }
`;

const ExperienceSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 5%;
  background:
   
    
    ${props => (props.isDarkTheme ? '#0a192f' : '#ffffff')};

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const TopRightGlow = styled.span`
  position: absolute;
  top: -8rem;
  right: -4rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  pointer-events: none;
  background: ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.19)' : 'rgba(96,165,250,0.13)')};
  filter: blur(26px);
  animation: ${drift} 9s ease-in-out infinite;
  z-index: 0;
`;

const AnimatedGlow = styled.span`
  position: absolute;
  top: -5rem;
  right: -4rem;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  pointer-events: none;
  background: ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.19)' : 'rgba(96,165,250,0.13)')};
  filter: blur(26px);
  animation: ${drift} 9s ease-in-out infinite;
`;

const AnimatedGlowBottom = styled.span`
  position: absolute;
  bottom: -6rem;
  left: -4rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  pointer-events: none;
  background: ${props => (props.isDarkTheme ? 'rgba(30,64,175,0.2)' : 'rgba(30,64,175,0.12)')};
  filter: blur(30px);
  animation: ${drift} 10s ease-in-out infinite reverse;
`;

const ContentWrap = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 1.4rem;
`;

const Kicker = styled.p`
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#93c5fd' : '#1d4ed8')};
`;

const Title = styled.h2`
  margin: 0.45rem 0 0;
  font-size: clamp(2rem, 3.8vw, 3rem);
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#0f172a')};
`;

const SubTitle = styled.p`
  margin: 0.72rem 0 0;
  max-width: 620px;
  font-size: 1rem;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`;

const LayoutGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 980px) {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }
`;

const FeaturedCard = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => (props.isDarkTheme ? 'linear-gradient(135deg, rgba(15,23,42,0.82), rgba(30,58,138,0.5))' : 'linear-gradient(135deg, rgba(255,255,255,0.97), rgba(239,246,255,0.9))')};
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.33)' : 'rgba(59,130,246,0.24)')};
  box-shadow: ${props => (props.isDarkTheme ? '0 24px 42px rgba(2,12,27,0.3)' : '0 18px 34px rgba(15,23,42,0.11)')};
  border-radius: 1.2rem;
  padding: 1.4rem;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ShineOverlay = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%);
  pointer-events: none;
  animation: ${sweep} 7s linear infinite;
  opacity: 0.36;
`;

const FeaturedHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.95rem;
  align-items: flex-start;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LogoSlot = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 0.95rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: ${props => (props.isDarkTheme ? 'rgba(15,23,42,0.76)' : 'rgba(255,255,255,0.9)')};
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(147,197,253,0.35)' : 'rgba(59,130,246,0.24)')};
`;

const CompanyLogo = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  object-fit: contain;
  border-radius: 0.65rem;
`;

const FeaturedIdentity = styled.div`
  width: 100%;
`;

const RoleRow = styled.div`
  display: flex;
  gap: 0.58rem;
  align-items: center;
  flex-wrap: wrap;
`;

const RoleTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.22rem, 2.5vw, 1.7rem);
  color: ${props => (props.isDarkTheme ? '#dbeafe' : '#1d4ed8')};
`;

const CurrentBadge = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 800;
  color: #eff6ff;
  background: linear-gradient(130deg, #3b82f6, #1d4ed8);
  border-radius: 999px;
  padding: 0.24rem 0.56rem;
`;

const CompanyName = styled.h4`
  margin: 0.35rem 0 0.65rem;
  font-size: 1.08rem;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#1f2937')};
`;

const MetaRow = styled.div`
  display: flex;
  gap: 0.42rem;
  flex-wrap: wrap;
`;

const MetaPill = styled.span`
  font-size: 0.76rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#bfdbfe' : '#1e40af')};
  background: ${props => (props.isDarkTheme ? 'rgba(59,130,246,0.14)' : 'rgba(59,130,246,0.1)')};
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.33)' : 'rgba(59,130,246,0.25)')};
  border-radius: 999px;
  padding: 0.2rem 0.58rem;
`;

const ProjectNote = styled.p`
  position: relative;
  z-index: 1;
  margin: 0.95rem 0 0.7rem;
  font-weight: 700;
  font-size: 0.92rem;
  color: ${props => (props.isDarkTheme ? '#93c5fd' : '#1e3a8a')};
`;

const StackRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
  margin-bottom: 0.8rem;
`;

const TechTag = styled.span`
  font-size: 0.74rem;
  border-radius: 0.52rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  color: ${props => (props.isDarkTheme ? '#dbeafe' : '#1d4ed8')};
  background: ${props => (props.isDarkTheme ? 'rgba(37,99,235,0.34)' : 'rgba(191,219,254,0.75)')};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ResponsibilityList = styled.ul`
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.45rem;
`;

const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: 1.05rem;
  line-height: 1.5;
  font-size: 0.94rem;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};

  &:before {
    content: '';
    position: absolute;
    width: 0.42rem;
    height: 0.42rem;
    top: 0.54rem;
    left: 0;
    border-radius: 0.12rem;
    transform: rotate(45deg);
    background: ${props => (props.isDarkTheme ? '#60a5fa' : '#1d4ed8')};
  }
`;

const DeckPanel = styled.div`
  background: ${props => (props.isDarkTheme ? 'rgba(15,23,42,0.7)' : 'rgba(248,250,252,0.92)')};
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.25)' : 'rgba(59,130,246,0.17)')};
  border-radius: 1.1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.9rem;
  }
`;

const DeckHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.72rem;
`;

const DeckTitle = styled.h3`
  margin: 0;
  font-size: 1.06rem;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#0f172a')};
`;

const DeckHint = styled.p`
  margin: 0;
  font-size: 0.78rem;
  color: ${props => (props.isDarkTheme ? '#93c5fd' : '#1d4ed8')};
`;

const DeckViewport = styled.div`
  min-height: 300px;

  @media (max-width: 768px) {
    min-height: 270px;
  }
`;

const DeckCard = styled(motion.article)`
  cursor: grab;
  user-select: none;
  background: ${props => (props.isDarkTheme ? 'rgba(30,41,59,0.76)' : 'rgba(255,255,255,0.96)')};
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(148,163,184,0.3)' : 'rgba(203,213,225,0.92)')};
  border-radius: 0.95rem;
  padding: 0.95rem;
  box-shadow: ${props => (props.isDarkTheme ? '0 14px 28px rgba(2,12,27,0.25)' : '0 10px 22px rgba(15,23,42,0.08)')};

  &:active {
    cursor: grabbing;
  }
`;

const DeckTop = styled.div`
  display: flex;
  gap: 0.65rem;
  align-items: center;
`;

const MiniLogo = styled.img`
  width: 2.85rem;
  height: 2.85rem;
  object-fit: contain;
  border-radius: 0.5rem;
  background: rgba(255,255,255,0.95);
`;

const DeckMeta = styled.div`
  min-width: 0;
`;

const DeckRole = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: ${props => (props.isDarkTheme ? '#bfdbfe' : '#1d4ed8')};
`;

const DeckCompany = styled.p`
  margin: 0.18rem 0;
  font-size: 0.9rem;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#1f2937')};
`;

const DeckInfo = styled.p`
  margin: 0;
  font-size: 0.76rem;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`;

const DeckProject = styled.p`
  margin: 0.75rem 0 0.65rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#93c5fd' : '#1e3a8a')};
`;

const DeckTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.34rem;
`;

const DeckTechTag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 0.45rem;
  padding: 0.2rem 0.42rem;
  color: ${props => (props.isDarkTheme ? '#dbeafe' : '#1d4ed8')};
  background: ${props => (props.isDarkTheme ? 'rgba(37,99,235,0.3)' : 'rgba(191,219,254,0.72)')};
`;

const DeckDetailList = styled.ul`
  list-style: none;
  margin: 0.72rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.38rem;
`;

const DeckDetailItem = styled.li`
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.83rem;
  line-height: 1.42;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#475569')};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45rem;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: ${props => (props.isDarkTheme ? '#60a5fa' : '#1d4ed8')};
  }
`;

const DeckControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.55rem;
  margin-top: 0.82rem;
`;

const ControlButton = styled.button`
  border: 1px solid ${props => (props.isDarkTheme ? 'rgba(96,165,250,0.38)' : 'rgba(59,130,246,0.34)')};
  background: ${props => (props.isDarkTheme ? 'rgba(30,64,175,0.5)' : 'rgba(239,246,255,0.95)')};
  color: ${props => (props.isDarkTheme ? '#dbeafe' : '#1d4ed8')};
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.76rem;
  padding: 0.33rem 0.76rem;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${props => (props.isDarkTheme ? 'rgba(59,130,246,0.58)' : 'rgba(219,234,254,1)')};
  }
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 0.42rem;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const DotButton = styled.button`
  width: ${props => (props.isActive ? '1.3rem' : '0.52rem')};
  height: 0.52rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${props => (props.isActive
    ? (props.isDarkTheme ? '#60a5fa' : '#1d4ed8')
    : (props.isDarkTheme ? 'rgba(148,163,184,0.42)' : 'rgba(148,163,184,0.55)'))};
  transition: width 0.22s ease, background-color 0.22s ease;
`;

export default Experience;
