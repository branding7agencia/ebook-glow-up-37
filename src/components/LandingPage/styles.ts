import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Design Tokens
export const theme = {
  colors: {
    primary: '#FF6B00', // Laranja do ebook
    secondary: '#0095FF', // Azul claro
    background: '#0B1628', // Azul escuro/navy
    backgroundLight: '#122035',
    backgroundGradient: 'linear-gradient(135deg, #0B1628 0%, #1A2C4A 100%)',
    text: '#FFFFFF',
    textMuted: '#A0B4CC',
    success: '#00D26A',
    border: '#1E3A5F',
  },
  fonts: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Open Sans", sans-serif',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.fonts.secondary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Layout Components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Section = styled.section`
  padding: 80px 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 50px 0;
  }
`;

// Top Bar
export const TopBar = styled.div`
  background: ${theme.colors.primary};
  padding: 12px 20px;
  text-align: center;
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  color: ${theme.colors.text};
  letter-spacing: 0.5px;
  
  span {
    color: ${theme.colors.background};
    font-weight: 700;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  background: ${theme.colors.backgroundGradient};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, ${theme.colors.secondary}15 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${theme.colors.primary}10 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const HeroText = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const Badge = styled.span`
  display: inline-block;
  background: ${theme.colors.primary}20;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 8px 20px;
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  
  span {
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.textMuted};
  margin-bottom: 30px;
  line-height: 1.7;
  
  strong {
    color: ${theme.colors.text};
    font-weight: 600;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 4s ease-in-out infinite;
  
  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 20px 50px rgba(0, 149, 255, 0.3));
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const HeroImageMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  margin: 40px 0 40px;
  animation: ${float} 4s ease-in-out infinite;
  
  img {
    max-width: 280px;
    height: auto;
    filter: drop-shadow(0 20px 50px rgba(0, 149, 255, 0.3));
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
  }
`;

// CTA Button
export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 18px 40px;
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 107, 0, 0.4);
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:hover {
    background: #FF8533;
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(255, 107, 0, 0.5);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

// Features List
export const FeaturesList = styled.ul`
  list-style: none;
  margin: 30px 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px solid ${theme.colors.border}50;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

export const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  flex-shrink: 0;
  
  svg {
    width: 14px;
    height: 14px;
    color: ${theme.colors.text};
  }
`;

export const FeatureText = styled.span`
  font-size: 16px;
  color: ${theme.colors.textMuted};
  
  strong {
    color: ${theme.colors.text};
  }
`;

// Section Title
export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.primary};
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  
  span {
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

// Target Audience Section
export const TargetSection = styled(Section)`
  background: ${theme.colors.backgroundLight};
`;

export const TargetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TargetCard = styled.div`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(255, 107, 0, 0.1);
  }
`;

export const TargetIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    width: 30px;
    height: 30px;
    color: ${theme.colors.text};
  }
`;

export const TargetTitle = styled.h3`
  font-family: ${theme.fonts.primary};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const TargetDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
`;

// Benefits Section
export const BenefitsSection = styled(Section)`
  background: ${theme.colors.backgroundGradient};
`;

export const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: ${theme.colors.backgroundLight};
  padding: 20px 25px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.background};
  }
`;

export const BenefitIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.secondary}20;
  border-radius: 10px;
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.secondary};
  }
`;

export const BenefitText = styled.span`
  font-size: 15px;
  color: ${theme.colors.text};
`;

// Price Section
export const PriceSection = styled(Section)`
  background: ${theme.colors.background};
  text-align: center;
`;

export const PriceCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.backgroundLight} 0%, ${theme.colors.background} 100%);
  border: 2px solid ${theme.colors.primary};
  border-radius: 24px;
  padding: 50px;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
  }
`;

export const PriceLabel = styled.div`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const OldPrice = styled.div`
  font-size: 24px;
  color: ${theme.colors.textMuted};
  text-decoration: line-through;
  margin-bottom: 10px;
`;

export const CurrentPrice = styled.div`
  font-family: ${theme.fonts.primary};
  font-size: 56px;
  font-weight: 800;
  color: ${theme.colors.primary};
  margin-bottom: 30px;
  
  span {
    font-size: 20px;
    color: ${theme.colors.textMuted};
    font-weight: 400;
  }
`;

export const DiscountBadge = styled.div`
  display: inline-block;
  background: ${theme.colors.success};
  color: ${theme.colors.background};
  padding: 8px 20px;
  border-radius: 50px;
  font-family: ${theme.fonts.primary};
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 30px;
`;

// Guarantee Section
export const GuaranteeSection = styled(Section)`
  background: ${theme.colors.backgroundLight};
`;

export const GuaranteeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 20px;
  padding: 40px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

export const GuaranteeIcon = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 50px;
    height: 50px;
    color: ${theme.colors.text};
  }
`;

export const GuaranteeText = styled.div`
  h3 {
    font-family: ${theme.fonts.primary};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    color: ${theme.colors.primary};
  }
  
  p {
    font-size: 16px;
    color: ${theme.colors.textMuted};
    line-height: 1.7;
  }
`;

// Footer
export const Footer = styled.footer`
  background: ${theme.colors.background};
  border-top: 1px solid ${theme.colors.border};
  padding: 40px 20px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 40px;
  }
`;
