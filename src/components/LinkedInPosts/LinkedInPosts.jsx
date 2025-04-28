import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInPosts = () => {
  const { isDarkTheme } = useTheme();
  const posts = [
    {
      title: "NutriCare – Your Smart Nutrition Companion",
      content: `🌱 Introducing NutriCare – Your Smart Nutrition Companion 🥗📱
      
I'm excited to introduce NutriCare, my Final Year Project (FYP) developed as part of my Bachelor's Degree in Information Technology (Mobile Technology) at APU.

🚀 NutriCare is a mobile application designed to simplify nutrition management and provide seamless access to professional dietary guidance.

🔹 Key Features:
✅ Personalized Diet Plans – Custom recommendations tailored to individual health goals 🍽️
✅ Hassle-Free Specialist Booking – Easily schedule online or physical appointments with nutritionists & dietitians 📅
✅ Health Tracking Dashboard – Monitor daily nutrient intake and overall progress 📊
✅ Food Database & Meal Logging – Log meals conveniently with a vast food database 📖

This project allowed me to explore mobile app development, UI/UX design, and seamless appointment booking systems, leveraging Flutter, Firebase, and cloud integration to enhance user experience.`,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7313471856039079937/"
    },
    {
      title: "The Journey Comes to an End – A New Chapter Begins!",
      content: `🎓 The Journey Comes to an End – A New Chapter Begins! 🚀

My Bachelor's Degree in Information Technology (Mobile Technology) at APU has officially come to an end! It has been an incredible journey filled with challenges, learning, and growth.

One of the most rewarding experiences was being selected to participate in the FYP Showcase at APU, where I had the opportunity to demonstrate my Final Year Project, NutriCare.

This event was more than just a showcase—it was an inspiring platform to engage with peers, explore innovative ideas, and connect with industry professionals. The showcase provided me with valuable insights, constructive feedback, and meaningful conversations that will surely help shape my future in software development.

It was also a fantastic opportunity to network with like-minded individuals, exchange knowledge, and gain exposure to a variety of tech-driven solutions.`,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7313478763176988673/"
    }
  ];

  return (
    <LinkedInContainer id="linkedin" isDarkTheme={isDarkTheme}>
      <LinkedInContent>
        <Title isDarkTheme={isDarkTheme}>LinkedIn Posts</Title>
        <PostsGrid>
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <PostCard isDarkTheme={isDarkTheme}>
                <PostHeader>
                  <FaLinkedin />
                  <PostTitle isDarkTheme={isDarkTheme}>{post.title}</PostTitle>
                </PostHeader>
                <PostContent isDarkTheme={isDarkTheme}>
                  {post.content.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                  ))}
                </PostContent>
                <PostDate isDarkTheme={isDarkTheme}>{post.date}</PostDate>
                <PostLink
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  isDarkTheme={isDarkTheme}
                >
                  Read on LinkedIn
                </PostLink>
              </PostCard>
            </motion.div>
          ))}
        </PostsGrid>
      </LinkedInContent>
    </LinkedInContainer>
  );
};

const LinkedInContainer = styled.section`
  padding: 5rem 5%;
  background-color: ${props => props.isDarkTheme ? '#0a192f' : '#ffffff'};
  color: ${props => props.isDarkTheme ? '#e0e0e0' : '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const LinkedInContent = styled.div`
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

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  background: ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.1)' : '#f8f9fa'};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${props => props.isDarkTheme ? 'rgba(29, 78, 216, 0.2)' : '#e9ecef'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 2rem;
    color: #0077B5;
  }
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const PostContent = styled.div`
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1rem;
  }
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.isDarkTheme ? '#94a3b8' : '#666666'};
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`;

const PostLink = styled.a`
  display: inline-block;
  color: ${props => props.isDarkTheme ? '#60a5fa' : '#1d4ed8'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkedInPosts; 