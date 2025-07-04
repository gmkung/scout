import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  /* Default primary button styling */
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 0;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }
  
  &:active,
  &:focus {
    outline: none;
    border: none;
  }
  
  /* Content should appear above the pseudo-element */
  > * {
    position: relative;
    z-index: 1;
  }
`

export const SecondaryButton = styled(Button)`
  background: rgba(30, 27, 46, 0.8);
  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  &::before {
    background: rgba(139, 92, 246, 0.1);
  }
  
  &:hover {
    border-color: #8b5cf6;
    box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
  }
`

export const OutlineButton = styled(Button)`
  background: transparent;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
  box-shadow: none;
  
  &::before {
    background: #8b5cf6;
  }
  
  &:hover {
    color: #ffffff;
    border-color: #8b5cf6;
    box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
  }
`
