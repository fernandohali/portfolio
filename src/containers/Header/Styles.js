import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Centraliza o container horizontalmente */

  @media (max-width: 466px) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Faz o container ocupar o espaço disponível */
  @media (max-width: 466px) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

export const NavItem = styled.h1`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  letter-spacing: 0.1rem; /* Espaçamento entre letras */
  margin-right: 2rem; /* Espaço entre os itens */

  &:last-child {
    margin-right: 0; /* Remove o espaço à direita do último item */
  }

  &:hover {
    color: #007bff;
  }

  @media (max-width: 466px) {
    font-size: 1.2rem;

    margin: 0.5rem 0; /* Espaço entre os itens em telas pequenas */
  }
`;

export const Div = styled.div`
  border-radius: 5px;
  border-style: groove;
  border-color: blue;
  border-width: 1px;
  margin-right: 20px;
  padding: 10px;
  display: flex;
  margin-left: auto; /* Empurra o Div para o final do Container */

  @media (max-width: 466px) {
    margin: 0px;
    padding: 0.5rem 0;
  }
`;
