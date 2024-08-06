import styled from "styled-components";

// Container principal do componente de rodapé
export const Container = styled.div`
  background-color: #f5fcff; // Cor de fundo do container
  margin: 0 auto; // Centraliza o container horizontalmente
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Container para os links estáticos
export const LinksContainer = styled.div`
  background-color: transparent;
  display: flex;
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
`;

// Menu principal, incluindo o botão de toggle e a lista de ícones sociais
export const Menu = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent; // Cor de fundo transparente
  position: relative; // Posição relativa para posicionamento interno
  width: 280px; // Largura do menu
  height: 280px; // Altura do menu
  display: flex; // Usa flexbox para alinhar os itens
  align-items: center; // Alinha itens verticalmente no centro
  justify-content: center; // Alinha itens horizontalmente no centro

  // Animação quando o menu está ativo
  &.active .toggle {
    transform: rotate(360deg); // Rotaciona o botão de toggle
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 0 0 2px #333, 0 0 0 8px #fff; // Adiciona sombra ao botão de toggle
  }
`;

// Botão de toggle para abrir/fechar o menu
export const Toggle = styled.div`
  background-color: transparent; // Cor de fundo transparente
  position: relative; // Posição relativa para posicionamento interno
  width: 60px; // Largura do botão de toggle
  height: 60px; // Altura do botão de toggle
  background: #fff; // Cor de fundo branco
  border-radius: 50%; // Torna o botão circular
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15); // Adiciona sombra ao botão
  display: flex; // Usa flexbox para alinhar os itens
  align-items: center; // Alinha itens verticalmente no centro
  justify-content: center; // Alinha itens horizontalmente no centro
  color: #333; // Cor do texto
  font-size: 2rem; // Tamanho da fonte do texto
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  transition: transform 1.25s, box-shadow 1.25s; // Animações para transformação e sombra
  z-index: 5; // Nível de sobreposição do botão

  // Tamanho da imagem dentro do botão
  img {
    width: 40px; // Largura da imagem
    height: 40px; // Altura da imagem
  }

  // Efeito de hover para o botão
  &:hover {
    background: #f0f0f0; // Cor de fundo ao passar o mouse
  }
`;

// Lista de ícones sociais
export const SocialIconList = styled.ul`
  background-color: transparent; // Cor de fundo transparente
  position: absolute; // Posição absoluta para posicionamento
  width: 100%; // Largura total do elemento pai
  height: 100%; // Altura total do elemento pai
  display: flex; // Usa flexbox para alinhar os itens
  align-items: center; // Alinha itens verticalmente no centro
  justify-content: center; // Alinha itens horizontalmente no centro
  list-style: none; // Remove estilo de lista padrão
  padding: 0; // Remove padding
  margin: 0; // Remove margem
  transition: opacity 0.5s; // Transição suave para a opacidade
  opacity: ${(props) =>
    props.isActive ? 1 : 0}; // Controla a visibilidade com base no estado

  // Estiliza cada item da lista
  li {
    position: absolute; // Posição absoluta para posicionamento
    left: 0; // Alinha à esquerda
    list-style: none; // Remove estilo de lista padrão
    transition: transform 0.5s, opacity 0.5s; // Transições suaves para transformação e opacidade
    transform: rotate(calc(360deg / 8 * var(--i))); // Rotaciona os itens
    transform-origin: 140px; // Define o ponto de origem da rotação
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition-delay: calc(
      0.05s * var(--i)
    ); // Atraso na transição para criar um efeito de cascata

    // Estiliza o link dentro do item da lista
    a {
      position: relative; // Posição relativa para posicionamento interno
      display: flex; // Usa flexbox para alinhar os itens
      transform: rotate(
        calc(360deg / -8 * var(--i))
      ); // Rotaciona o link para ficar alinhado
      width: 60px; // Largura do link
      height: 60px; // Altura do link
      background-color: #fff; // Cor de fundo branco
      display: flex; // Usa flexbox para alinhar os itens
      align-items: center; // Alinha itens verticalmente no centro
      justify-content: center; // Alinha itens horizontalmente no centro
      border-radius: 50%; // Torna o link circular
      font-size: 1.75rem; // Tamanho da fonte do texto
      color: var(--clr); // Cor do texto
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15); // Adiciona sombra ao link
      transition: font-size 0.5s, box-shadow 0.5s; // Transições suaves para tamanho da fonte e sombra

      // Tamanho da imagem dentro do link
      img {
        width: 30px; // Largura da imagem
        height: 30px; // Altura da imagem
      }
    }

    // Efeito de hover para o link
    &:hover a {
      font-size: 2.5rem; // Aumenta o tamanho da fonte ao passar o mouse
      box-shadow: 0 0 0 2px var(--clr), 0 0 0 6px #fff; // Adiciona sombra ao link ao passar o mouse
    }
  }
`;
