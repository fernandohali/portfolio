import styled from "styled-components";

// Container principal do componente
export const Container = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

// Container para os itens de navegação
export const NavItemsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

// Estilização de cada item de navegação
export const NavItem = styled.div`
  position: relative;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: #4a5568;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: block;

    &:before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    &:hover {
      color: #667eea;
      transform: translateY(-2px);

      &:before {
        width: 80%;
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      width: 100%;
      text-align: center;

      &:hover {
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
      }
    }
  }
`;

// Estilização do botão de contato
export const Div = styled.div`
  a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 500;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);

      &:before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0) scale(1.02);
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    a {
      display: block;
      text-align: center;
      padding: 1rem 2rem;
    }
  }
`;
