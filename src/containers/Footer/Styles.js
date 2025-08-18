import styled from "styled-components";

// Container principal do componente de rodapé
export const Container = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%);
  color: white;
  padding: 3rem 2rem 1rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(118, 75, 162, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const ContainerComponetes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

// Container para os links estáticos
export const LinksContainer = styled.nav`
  display: flex;
  gap: 2rem;
  flex: 1;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s ease;
    }

    &:hover {
      color: white;
      transform: translateY(-2px);

      &:before {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

// Menu principal, incluindo o botão de toggle e a lista de ícones sociais
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 280px;
  height: 220px;

  @media (max-width: 768px) {
    width: 240px;
    height: 180px;
  }

  &.active .toggle {
    transform: rotate(360deg);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4),
      0 0 0 3px rgba(102, 126, 234, 0.3);
    background: linear-gradient(135deg, #667eea, #764ba2);
  }
`;

// Botão de toggle para abrir/fechar o menu
export const Toggle = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
  border: 2px solid rgba(255, 255, 255, 0.2);

  img {
    width: 35px;
    height: 35px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.3);

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

// Lista de ícones sociais
export const SocialIconList = styled.ul`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.isActive ? 1 : 0)};

  li {
    position: absolute;
    left: 0;
    list-style: none;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(calc(360deg / 8 * var(--i)));
    transform-origin: 140px;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition-delay: calc(0.05s * var(--i));

    a {
      position: relative;
      display: flex;
      transform: rotate(calc(360deg / -8 * var(--i)));
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.5rem;
      color: var(--clr);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 2px solid rgba(255, 255, 255, 0.2);

      img {
        width: 28px;
        height: 28px;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: rotate(calc(360deg / -8 * var(--i))) scale(1.2)
          translateY(-5px);
        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4),
          0 0 0 3px rgba(102, 126, 234, 0.3);

        img {
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    li {
      transform-origin: 120px;

      a {
        width: 50px;
        height: 50px;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

// Separador visual
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  margin: 2rem 0 1rem;
`;

// Rodapé inferior para texto e links de política
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const CopyrightText = styled.span`
  font-weight: 400;
`;

// Links de políticas
export const PolicyLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-weight: 400;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
