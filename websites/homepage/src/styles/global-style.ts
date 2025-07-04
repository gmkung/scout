import { createGlobalStyle } from 'styled-components'
import { responsiveSize } from './responsiveSize'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background: #0a0a0f;
    color: #e8e9f0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    p {
      font-weight: 400;
      font-size: ${responsiveSize(16, 18)};
      color: #b8bcc8;
      margin: 0 0 1rem 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      color: #e8e9f0;
      margin: 0 0 1rem 0;
    }

    h1 {
      font-size: ${responsiveSize(32, 48)};
      font-weight: 700;
      background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    h2 {
      font-size: ${responsiveSize(24, 32)};
      color: #c4b5fd;
    }

    h3 {
      font-size: ${responsiveSize(20, 24)};
      color: #a78bfa;
    }
  }

  /* Dark theme scrollbar */
  .os-theme-dark {
    --os-size: 8px;
    --os-padding-perpendicular: 2px;
    --os-padding-axis: 2px;
    --os-track-border-radius: 10px;
    --os-track-bg: transparent;
    --os-track-bg-hover: rgba(139, 92, 246, 0.1);
    --os-track-bg-active: rgba(139, 92, 246, 0.2);
    --os-track-border: transparent;
    --os-track-border-hover: transparent;
    --os-track-border-active: transparent;
    --os-handle-min-size: 30px;
    --os-handle-bg: rgba(139, 92, 246, 0.6);
    --os-handle-bg-hover: rgba(139, 92, 246, 0.8);
    --os-handle-bg-active: rgba(139, 92, 246, 1);
    --os-handle-border: transparent;
    --os-handle-border-hover: transparent;
    --os-handle-border-active: transparent;
    --os-handle-border-radius: 10px;
    --os-handle-interactive-area-offset: 0px;
  }

  /* Loading skeleton dark theme */
  .react-loading-skeleton {
    --base-color: #1e1b2e;
    --highlight-color: #2d2745;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block;
  }

  /* Modal overlay styling */
  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.85) !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .ReactModal__Content {
    background: linear-gradient(135deg, #1a1625 0%, #1e1b2e 100%) !important;
    border: 1px solid rgba(139, 92, 246, 0.3) !important;
    border-radius: 12px !important;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8),
                0 0 0 1px rgba(139, 92, 246, 0.1) !important;
  }

  /* Selection styling */
  ::selection {
    background: rgba(139, 92, 246, 0.3);
    color: #e8e9f0;
  }

  ::-moz-selection {
    background: rgba(139, 92, 246, 0.3);
    color: #e8e9f0;
  }

  /* Input and form styling */
  input, textarea, select {
    background: rgba(30, 27, 46, 0.8);
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #e8e9f0;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #8b5cf6;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    &::placeholder {
      color: #6b7280;
    }
  }

  /* Link styling */
  a {
    color: #8b5cf6;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #a78bfa;
      text-decoration: underline;
    }
  }

  /* Code styling */
  code {
    background: rgba(30, 27, 46, 0.6);
    color: #c4b5fd;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.9em;
  }

  pre {
    background: rgba(30, 27, 46, 0.8);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    
    code {
      background: none;
      padding: 0;
    }
  }
`
