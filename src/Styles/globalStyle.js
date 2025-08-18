import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #1a1a1a;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #5a67d8, #6b46c1);
  }

  /* Seleção de texto */
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #1a1a1a;
  }

  /* Animações suaves para todos os elementos */
  * {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Reset para links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Reset para botões */
  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Tipografia responsiva */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 600;
  }

  p {
    line-height: 1.7;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-padding {
    padding: 5rem 0;
  }

  /* Animações */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    .section-padding {
      padding: 3rem 0;
    }
  }
`;
