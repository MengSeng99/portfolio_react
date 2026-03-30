import styled, { keyframes }  from 'styled-components';
import { motion as Motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
  const { isDarkTheme } = useTheme();
  const webDevSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  ];

  const mobileDevSkills = [
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Android', icon: 'https://www.vhv.rs/dpng/d/116-1168065_robot-logo-android-new-android-logo-png-transparent.png' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Swift UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' }
  ];

  const otherSkills = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Tableau', icon: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png' },
  ];

  const languages = [
    { name: 'Mandarin', level: 'Native' },
    { name: 'English', level: 'Excellent' },
    { name: 'Malay', level: 'Excellent' },
  ];

  return (
    <SkillsContainer id="skills" isDarkTheme={isDarkTheme}>
      <BottomRightGlow isDarkTheme={isDarkTheme} />
      <SkillsContent>
        <Title isDarkTheme={isDarkTheme}>What I Can Do</Title>
        <Description isDarkTheme={isDarkTheme}>
          I build practical software solutions across web, mobile, and enterprise systems.
          My experience includes developing responsive web applications, creating mobile
          app features, and contributing to .NET-based modules with SQL-backed workflows.
          I also work on performance improvements, feature delivery, bug fixing, and
          technical documentation while collaborating with cross-functional teams.
        </Description>

        <SkillsGrid>
          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Web Development</CategoryTitle>
            <SkillsList>
              {webDevSkills.map((skill, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </Motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Mobile Development</CategoryTitle>
            <SkillsList>
              {mobileDevSkills.map((skill, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </Motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Other Skills</CategoryTitle>
            <SkillsList>
              {otherSkills.map((skill, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    <SkillIcon src={skill.icon} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                </Motion.div>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory isDarkTheme={isDarkTheme}>
            <CategoryTitle isDarkTheme={isDarkTheme}>Languages</CategoryTitle>
            <SkillsList>
              {languages.map((language, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SkillItem isDarkTheme={isDarkTheme}>
                    {language.name} ({language.level})
                  </SkillItem>
                </Motion.div>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(8px, -12px, 0) scale(1.04); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`;

const SkillsContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5rem 5%;
  background: ${props => (props.isDarkTheme
    ? 'radial-gradient(circle at 88% 10%, rgba(14, 165, 233, 0.16) 0%, transparent 58%), #0a192f'
    : '#ffffff')};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background 0.3s ease, color 0.3s ease;
`;

const BottomRightGlow = styled.span`
  position: absolute;
  bottom: -8rem;
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

const SkillsContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 3rem;
  max-width: 800px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#ffffff'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  font-size: 1rem;
  transition: color 0.3s ease;

  span {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  object-fit: contain;
`;

export default Skills; 