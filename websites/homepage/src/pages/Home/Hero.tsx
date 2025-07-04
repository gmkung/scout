import React from 'react'
import styled, { css } from 'styled-components'
import { landscapeStyle } from 'styles/landscapeStyle'
import { responsiveSize } from 'styles/responsiveSize'
import { theme } from 'styles/theme'
import SecuredByKleros from 'svgs/footer/secured-by-kleros.svg'
import EtherscanAndMetamaskImage from 'pngs/hero/etherscan-and-metamask.png'
import { Button, ButtonAnchor } from 'components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily.primary};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${responsiveSize(48, 80)};
  width: 90vw;
  margin: 0 auto;
  padding: ${responsiveSize(40, 80)}px 0;
  position: relative;

  /* Subtle background effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 70%
    );
    z-index: -1;
  }

  ${landscapeStyle(
    () => css`
      width: auto;
      max-width: 1200px;
    `
  )}
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  ${landscapeStyle(
    () => css`
      width: 560px;
      text-align: left;
    `
  )}
`

const Intro = styled.p`
  display: flex;
  font-size: ${responsiveSize(16, 20)};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};
  text-align: center;
  margin: 0 auto;
  margin-bottom: ${responsiveSize(12, 16)}px;
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;

  ${landscapeStyle(
    () => css`
      margin: 0;
      margin-bottom: 16px;
    `
  )}
`

const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-size: ${responsiveSize(48, 72)};
  font-weight: ${theme.typography.fontWeight.bold};
  font-family: ${theme.typography.fontFamily.display};
  background: ${theme.colors.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${responsiveSize(24, 32)}px;
  line-height: ${theme.typography.lineHeight.tight};

  ${landscapeStyle(
    () => css`
      margin: 0;
      margin-bottom: 32px;
    `
  )}
`

const Description = styled.p`
  display: flex;
  font-size: ${responsiveSize(18, 22)};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin: 0;
  margin-bottom: ${responsiveSize(32, 48)}px;

  ${landscapeStyle(
    () => css`
      width: 520px;
    `
  )}
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  position: relative;

  /* Subtle glow effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.15) 0%,
      transparent 70%
    );
    z-index: -1;
  }
`

const StyledImg = styled.img`
  height: ${responsiveSize(200, 340)};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.purple.lg};
  transition: transform ${theme.animation.base} ease,
              box-shadow ${theme.animation.base} ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.purple.xl};
  }
`

const StyledButtonAnchor = styled(ButtonAnchor)`
  ${landscapeStyle(
    () => css`
      padding-right: 0;
    `
  )}
`

const StyledSecuredByKleros = styled(SecuredByKleros)`
  align-self: center;
  opacity: 0.8;
  transition: opacity ${theme.animation.base} ease;

  &:hover {
    opacity: 1;
  }

  ${landscapeStyle(
    () => css`
      align-self: flex-start;
    `
  )}
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${responsiveSize(16, 24)}px;
  margin-top: ${responsiveSize(24, 32)}px;
  width: 100%;

  ${landscapeStyle(
    () => css`
      grid-template-columns: repeat(2, 1fr);
    `
  )}
`

const FeatureCard = styled.div`
  background: ${theme.colors.background.surface};
  border: 1px solid ${theme.colors.border.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${responsiveSize(16, 20)}px;
  backdrop-filter: blur(10px);
  transition: all ${theme.animation.base} ease;

  &:hover {
    border-color: ${theme.colors.border.primary};
    transform: translateY(-2px);
  }

  h3 {
    font-size: ${responsiveSize(14, 16)}px;
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.purple[400]};
    margin: 0 0 8px 0;
  }

  p {
    font-size: ${responsiveSize(12, 14)}px;
    color: ${theme.colors.text.secondary};
    margin: 0;
    line-height: ${theme.typography.lineHeight.normal};
  }
`

const Hero: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Intro>Advanced Legal Intelligence Platform</Intro>
        <Title>Library of Justice</Title>
        <Description>
          Harness the power of sophisticated data analytics and AI-driven insights 
          to transform legal research, case management, and judicial decision-making 
          with enterprise-grade security and precision.
        </Description>
        
        <FeatureGrid>
          <FeatureCard>
            <h3>Data Analytics</h3>
            <p>Advanced pattern recognition and trend analysis for case outcomes</p>
          </FeatureCard>
          <FeatureCard>
            <h3>AI-Powered Research</h3>
            <p>Intelligent document analysis and legal precedent discovery</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Case Management</h3>
            <p>Streamlined workflow optimization and resource allocation</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Secure Platform</h3>
            <p>Enterprise-grade security with end-to-end encryption</p>
          </FeatureCard>
        </FeatureGrid>
        
        <StyledSecuredByKleros />
      </LeftSide>
      <RightSide>
        <StyledImg src={EtherscanAndMetamaskImage} alt="Platform Interface" />
        <StyledButtonAnchor
          href="https://app.klerosscout.eth.limo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Launch Platform</Button>
        </StyledButtonAnchor>
      </RightSide>
    </Container>
  )
}

export default Hero
