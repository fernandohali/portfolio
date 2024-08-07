import styled from "styled-components";

// Container principal do componente de rodapé
export const Container = styled.div`
  background-color: #f5fcff;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 740px) {
    padding: 1rem;
  }
`;

export const ContainerComponetes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    width: 100%; // Garante que os itens filhos ocupem a largura total do contêiner
  }
`;

// Container para os links estáticos
export const LinksContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: left;
  gap: 20px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #0073e6;
    }
  }

  @media (max-width: 740px) {
    flex-direction: column;
    gap: 10px;
    width: 100%; // Garante que os links ocupem a largura total do contêiner
    align-items: center; // Centraliza os links na coluna
  }
`;

// Menu principal, incluindo o botão de toggle e a lista de ícones sociais
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  width: 280px;
  height: 220px;

  @media (max-width: 740px) {
    margin-top: 2rem;
  }

  &.active .toggle {
    transform: rotate(360deg);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 0 0 2px #333, 0 0 0 8px #fff;
  }
`;

// Botão de toggle para abrir/fechar o menu
export const Toggle = styled.div`
  background-color: transparent;
  position: relative;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 1.25s, box-shadow 1.25s;
  z-index: 5;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background: #f0f0f0;
  }

  @media (max-width: 740px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

// Lista de ícones sociais
export const SocialIconList = styled.ul`
  background-color: transparent;
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
    transition: transform 0.5s, opacity 0.5s;
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
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.75rem;
      color: var(--clr);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
      transition: font-size 0.5s, box-shadow 0.5s;

      img {
        width: 30px;
        height: 30px;
      }
    }

    &:hover a {
      font-size: 2.5rem;
      box-shadow: 0 0 0 2px var(--clr), 0 0 0 6px #fff;
    }
  }

  @media (max-width: 740px) {
    li {
      a {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;

        img {
          height: min-content;
          width: 25px;
          height: 25px;
        }
      }

      &:hover a {
        font-size: 2rem;
      }
    }
  }
`;

// Texto do rodapé
export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #333;

  span {
    margin-bottom: 10px;
  }

  @media (max-width: 466px) {
    margin-top: 10px;
  }
`;

// Links de políticas
export const PolicyLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #0073e6;
    }
  }

  @media (max-width: 466px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Rodapé inferior para texto e links de política
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  margin-top: 20px;
  color: #333;

  span {
    margin-right: 20px;
  }

  div {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;

      &:hover {
        color: #0073e6;
      }
    }
  }

  @media (max-width: 466px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-right: 0;
      margin-bottom: 10px;
    }

    div {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

// Tarja no meio (opcional)
export const MiddleBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  margin: 20px 0;

  @media (max-width: 466px) {
    margin: 10px 0;
  }
`;
