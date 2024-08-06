import styled from "styled-components";

// Container principal do componente
export const Container = styled.div`
  background-color: #ffffff; // Cor de fundo branca
  display: flex; // Usa flexbox para alinhar os itens
  justify-content: space-between; // Distribui o espaço igualmente entre os itens
  align-items: center; // Alinha itens verticalmente no centro
  padding: 1rem 0; // Espaçamento interno
  margin: 0 auto; // Centraliza o container horizontalmente

  @media (max-width: 466px) {
    flex-direction: column; // Muda a direção do flex para coluna em telas pequenas
    padding: 0.5rem 0; // Reduz o espaçamento interno em telas pequenas
  }
`;

// Container para os itens de navegação
export const NavItemsContainer = styled.div`
  display: flex; // Usa flexbox para alinhar os itens
  justify-content: center; // Alinha itens horizontalmente no centro
  align-items: center; // Alinha itens verticalmente no centro
  margin: 0 auto; // Centraliza o container horizontalmente
  flex: 1; // Faz o container ocupar o espaço disponível
  @media (max-width: 466px) {
    flex-direction: column; // Muda a direção do flex para coluna em telas pequenas

    padding: 0.5rem 0; // Reduz o espaçamento interno em telas pequenas
  }
`;

// Estilização de cada item de navegação
export const NavItem = styled.h1`
  font-size: 1rem; // Tamanho da fonte
  color: #333; // Cor do texto
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  transition: color 0.3s ease; // Transição suave para a cor
  letter-spacing: 0.1rem; // Espaçamento entre letras
  margin-right: 2rem; // Espaço entre os itens

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #0073e6;
    }
  }

  &:last-child {
    margin-right: 0; // Remove o espaço à direita do último item
  }

  &:hover {
    color: #007bff; // Cor ao passar o mouse
  }

  @media (max-width: 466px) {
    font-size: 1.2rem; // Aumenta o tamanho da fonte em telas pequenas
    margin: 0.5rem 0; // Espaço entre os itens em telas pequenas
  }
`;

// Estilização do elemento Div
export const Div = styled.div`
  border-radius: 5px; // Arredonda os cantos do borda
  border-style: groove; // Estilo de borda em sulco
  border-color: blue; // Cor da borda azul
  border-width: 1px; // Largura da borda
  margin-right: 20px; // Espaço à direita
  padding: 10px; // Espaçamento interno
  display: flex; // Usa flexbox para alinhar os itens}

  margin-left: auto; // Empurra o Div para o final do Container

  @media (max-width: 466px) {
    margin: 0px; // Remove margem em telas pequenas
    padding: 0.5rem 0; // Reduz o espaçamento interno em telas pequenas
  }
`;
