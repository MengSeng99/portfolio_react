import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const { isDarkTheme } = useTheme();
  const contactInfo = {
    whatsapp: "+60 1126677787",
    phone: "+60 1126677787",
    email: "kohmengsengapu@gmail.com",
    github: "MengSeng99",
    linkedin: "https://www.linkedin.com/in/meng-seng-koh-4043a628a/"
  };

  return (
    <ContactContainer id="contact" isDarkTheme={isDarkTheme}>
      <ContactContent>
        <Title isDarkTheme={isDarkTheme}>Get in Touch</Title>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactCard isDarkTheme={isDarkTheme}>
            <ContactItem href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`} target="_blank" isDarkTheme={isDarkTheme}>
              <FaWhatsapp />
              <span>WhatsApp</span>
            </ContactItem>

            <ContactItem href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} isDarkTheme={isDarkTheme}>
              <FaPhone />
              <span>Call</span>
            </ContactItem>

            <ContactItem href={`mailto:${contactInfo.email}`} isDarkTheme={isDarkTheme}>
              <FaEnvelope />
              <span>Email</span>
            </ContactItem>

            <ContactItem href={`https://github.com/${contactInfo.github}`} target="_blank" isDarkTheme={isDarkTheme}>
              <FaGithub />
              <span>GitHub</span>
            </ContactItem>

            <ContactItem href={contactInfo.linkedin} target="_blank" isDarkTheme={isDarkTheme}>
              <FaLinkedin />
              <span>LinkedIn</span>
            </ContactItem>
          </ContactCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactInfo isDarkTheme={isDarkTheme}>
            <h3>Contact Information</h3>
            <InfoItem isDarkTheme={isDarkTheme}>
              <FaPhone /> {contactInfo.phone}
            </InfoItem>
            <InfoItem isDarkTheme={isDarkTheme}>
              <FaEnvelope /> {contactInfo.email}
            </InfoItem>
            <InfoText isDarkTheme={isDarkTheme}>
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </InfoText>
          </ContactInfo>
        </motion.div>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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

const ContactCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  text-align: left;
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: color 0.3s ease;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  transition: color 0.3s ease;

  svg {
    color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  }
`;

const InfoText = styled.p`
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  line-height: 1.6;
  transition: color 0.3s ease;
`;

export default Contact; 