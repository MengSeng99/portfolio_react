import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const Education = () => {
  const { isDarkTheme } = useTheme();

  const educationData = [
    {
      degree: 'Secondary School',
      school: 'SMK SERI PERLING',
      year: '2015 - 2019',
      cgpa: 'SPM: 7A 2B',
      specialization: 'Accounting stream with additional mathematics and economics',
      score: 88,
      scoreLabel: 'Academic Strength',
      highlights: ['Strong fundamentals in math and economics'],
      badges: ['Accounting Foundation', 'Economics Basics'],
    },
    {
      degree: 'Diploma in Information & Communication Technology',
      school: 'Asia Pacific University (APU)',
      year: '2020 - 2022',
      cgpa: 'CGPA: 3.53',
      specialization: 'Software Engineering',
      score: 88,
      scoreLabel: 'CGPA Progress',
      highlights: ['Built practical software projects', 'Collaborated on team-based assignments'],
      badges: ['Software Engineering'],
    },
    {
      degree: 'Bachelor of Science (Hons) in Information Technology',
      school: 'Asia Pacific University (APU)',
      year: '2023 - 2025',
      cgpa: 'CGPA: 3.75',
      specialization: 'Mobile Technology',
      score: 94,
      scoreLabel: 'CGPA Progress',
      highlights: ['Focused on mobile-first product development', 'Applied end-to-end engineering practices'],
      badges: ['Mobile Technology'],
    },
  ];

  return (
    <EducationSection
      as={motion.section}
      id="education"
      isDarkTheme={isDarkTheme}
      initial={{ opacity: 0, y: 52, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <HandoffVeil
        as={motion.div}
        isDarkTheme={isDarkTheme}
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <ContentWrap>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Title isDarkTheme={isDarkTheme}>Education</Title>
          <Subtitle isDarkTheme={isDarkTheme}>
            A snapshot of my academic path, technical focus areas, and consistent growth.
          </Subtitle>
        </SectionHeader>

        <Timeline
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          isDarkTheme={isDarkTheme}
        >
          {educationData.map((edu, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';

            return (
              <TimelineItem
                as={motion.article}
                key={edu.degree}
                variants={itemVariants}
                side={side}
              >
                <CenterColumn>
                  <Pin isDarkTheme={isDarkTheme} />
                  <YearTag isDarkTheme={isDarkTheme}>{edu.year}</YearTag>
                </CenterColumn>

                <EducationCard
                  as={motion.div}
                  side={side}
                  isDarkTheme={isDarkTheme}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <Degree isDarkTheme={isDarkTheme}>{edu.degree}</Degree>
                  <School isDarkTheme={isDarkTheme}>{edu.school}</School>
                  <Specialization isDarkTheme={isDarkTheme}>{edu.specialization}</Specialization>
                  <Cgpa isDarkTheme={isDarkTheme}>{edu.cgpa}</Cgpa>

                  <ScoreBlock>
                    <ScoreHeader>
                      <ScoreLabel isDarkTheme={isDarkTheme}>{edu.scoreLabel}</ScoreLabel>
                      <ScoreValue isDarkTheme={isDarkTheme}>{edu.score}%</ScoreValue>
                    </ScoreHeader>
                    <ScoreTrack isDarkTheme={isDarkTheme}>
                      <ScoreFill
                        as={motion.div}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${edu.score}%` }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      />
                    </ScoreTrack>
                  </ScoreBlock>

                  <HighlightList>
                    {edu.highlights.map((item) => (
                      <HighlightItem isDarkTheme={isDarkTheme} key={item}>
                        {item}
                      </HighlightItem>
                    ))}
                  </HighlightList>

                  <BadgeRow>
                    {edu.badges.map((badge) => (
                      <Badge isDarkTheme={isDarkTheme} key={badge}>
                        {badge}
                      </Badge>
                    ))}
                  </BadgeRow>
                </EducationCard>
              </TimelineItem>
            );
          })}
        </Timeline>
      </ContentWrap>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5.5rem 5%;
  background: ${(props) =>
    props.isDarkTheme
      ? 'radial-gradient(circle at 88% 92%, rgba(14, 165, 233, 0.16) 0%, transparent 36%), #0a192f'
      : '#ffffff'};
  color: ${(props) => (props.isDarkTheme ? '#e0e0e0' : '#1f2937')};
  transition: background 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 4.2rem 1rem;
  }
`;

const HandoffVeil = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 9rem;
  pointer-events: none;
  background: ${(props) =>
    props.isDarkTheme
      ? 'linear-gradient(180deg, rgba(8,20,38,0.92) 0%, rgba(10,25,47,0.45) 55%, rgba(10,25,47,0) 100%)'
      : 'linear-gradient(180deg, rgba(219,234,254,0.62) 0%, rgba(255,255,255,0) 100%)'};
  z-index: 0;
`;

const ContentWrap = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.4rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  letter-spacing: 0.02em;
  margin-bottom: 0.7rem;
  color: ${(props) => (props.isDarkTheme ? '#e2e8f0' : '#111827')};
`;

const Subtitle = styled.p`
  max-width: 720px;
  font-size: 1.02rem;
  line-height: 1.7;
  color: ${(props) => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`;

const Timeline = styled(motion.div)`
  position: relative;
  display: grid;
  gap: 1.3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    bottom: 0.5rem;
    left: 50%;
    width: 3px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: ${(props) =>
      props.isDarkTheme
        ? 'linear-gradient(180deg, rgba(56,189,248,0.15), rgba(59,130,246,0.9), rgba(56,189,248,0.2))'
        : 'linear-gradient(180deg, rgba(59,130,246,0.18), rgba(37,99,235,0.9), rgba(59,130,246,0.22))'};
    z-index: 1;
  }

  @media (max-width: 900px) {
    &::before {
      left: 1.05rem;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 110px 1fr;
  align-items: stretch;
  min-height: 230px;

  @media (max-width: 900px) {
    grid-template-columns: 2.1rem 1fr;
    min-height: unset;
  }
`;

const CenterColumn = styled.div`
  grid-column: 2;
  position: relative;
  z-index: 3;

  @media (max-width: 900px) {
    grid-column: 1;
  }
`;

const Pin = styled.span`
  position: absolute;
  top: 1.9rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 50%;
  background: ${(props) => (props.isDarkTheme ? '#60a5fa' : '#1d4ed8')};
  box-shadow: 0 0 0 7px ${(props) => (props.isDarkTheme ? 'rgba(96,165,250,0.22)' : 'rgba(37,99,235,0.22)')};

  @media (max-width: 900px) {
    left: 1.05rem;
    transform: none;
    top: 1.8rem;
  }
`;

const YearTag = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -0.1rem;
  padding: 0.36rem 0.78rem;
  border-radius: 999px;
  border: 1px solid ${(props) => (props.isDarkTheme ? 'rgba(147,197,253,0.42)' : 'rgba(37,99,235,0.34)')};
  background: ${(props) =>
    props.isDarkTheme
      ? 'linear-gradient(135deg, rgba(30,41,59,0.96), rgba(15,23,42,0.92))'
      : 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239,246,255,0.95))'};
  color: ${(props) => (props.isDarkTheme ? '#dbeafe' : '#1e40af')};
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1.2;
  box-shadow: ${(props) =>
    props.isDarkTheme
      ? '0 8px 20px rgba(2, 6, 23, 0.35)'
      : '0 8px 18px rgba(30, 64, 175, 0.14)'};
  backdrop-filter: blur(6px);

  &::before {
    content: '';
    position: absolute;
    left: -0.22rem;
    top: 50%;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    transform: translateY(-50%);
    background: ${(props) => (props.isDarkTheme ? '#7dd3fc' : '#2563eb')};
    box-shadow: 0 0 0 2px ${(props) => (props.isDarkTheme ? 'rgba(125,211,252,0.25)' : 'rgba(37,99,235,0.2)')};
  }

  @media (max-width: 900px) {
    left: 2.55rem;
    transform: none;
    top: -0.05rem;
    font-size: 0.7rem;
    padding: 0.32rem 0.68rem;
  }
`;

const EducationCard = styled.div`
  grid-column: ${(props) => (props.side === 'left' ? '1' : '3')};
  align-self: stretch;
  background: ${(props) => (props.isDarkTheme ? 'rgba(15, 23, 42, 0.76)' : 'rgba(255, 255, 255, 0.95)')};
  border: 1px solid ${(props) => (props.isDarkTheme ? 'rgba(96,165,250,0.22)' : 'rgba(30,64,175,0.13)')};
  box-shadow: ${(props) =>
    props.isDarkTheme
      ? '0 14px 34px rgba(2, 6, 23, 0.35)'
      : '0 14px 30px rgba(15, 23, 42, 0.08)'};
  border-radius: 1.05rem;
  padding: 1.6rem;
  backdrop-filter: blur(4px);

  @media (max-width: 900px) {
    grid-column: 2;
    margin-left: 0.2rem;
    padding: 1.4rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const Degree = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: ${(props) => (props.isDarkTheme ? '#93c5fd' : '#1d4ed8')};
  margin: 0 0 0.45rem;
`;

const School = styled.h4`
  font-size: 0.98rem;
  color: ${(props) => (props.isDarkTheme ? '#e2e8f0' : '#1f2937')};
  margin: 0 0 0.5rem;
`;

const Specialization = styled.p`
  font-size: 0.92rem;
  color: ${(props) => (props.isDarkTheme ? '#bfdbfe' : '#1e3a8a')};
  margin: 0 0 0.8rem;
`;

const Cgpa = styled.p`
  font-size: 0.92rem;
  margin: 0 0 0.95rem;
  color: ${(props) => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`;

const ScoreBlock = styled.div`
  margin-bottom: 1rem;
`;

const ScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.45rem;
`;

const ScoreLabel = styled.span`
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => (props.isDarkTheme ? '#bfdbfe' : '#1d4ed8')};
`;

const ScoreValue = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${(props) => (props.isDarkTheme ? '#dbeafe' : '#1e3a8a')};
`;

const ScoreTrack = styled.div`
  width: 100%;
  height: 0.52rem;
  border-radius: 999px;
  overflow: hidden;
  background: ${(props) => (props.isDarkTheme ? 'rgba(148,163,184,0.24)' : 'rgba(148,163,184,0.34)')};
`;

const ScoreFill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #22d3ee 0%, #2563eb 100%);
`;

const HighlightList = styled.ul`
  margin: 0;
  padding-left: 1.05rem;
`;

const HighlightItem = styled.li`
  font-size: 0.89rem;
  line-height: 1.45;
  margin-bottom: 0.38rem;
  color: ${(props) => (props.isDarkTheme ? '#cbd5e1' : '#334155')};

  &:last-child {
    margin-bottom: 0;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.48rem;
  margin-top: 1rem;
`;

const Badge = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.32rem 0.62rem;
  border-radius: 999px;
  color: ${(props) => (props.isDarkTheme ? '#dbeafe' : '#1e3a8a')};
  background: ${(props) => (props.isDarkTheme ? 'rgba(59,130,246,0.25)' : 'rgba(191,219,254,0.78)')};
  border: 1px solid ${(props) => (props.isDarkTheme ? 'rgba(147,197,253,0.35)' : 'rgba(59,130,246,0.24)')};
`;

export default Education;
