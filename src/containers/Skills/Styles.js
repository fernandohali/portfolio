import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

export const MySkills = styled.h1`
  font-size: 1rem;
  color: black;
  font-weight: bold;
  margin: 10px;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 466px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Experiencia = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
  margin: 10px;
  background-color: transparent;
  color: #282938;

  @media (max-width: 466px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  overflow-x: auto; /* Permite a rolagem horizontal */
  padding: 20px 0;
  white-space: nowrap; /* Impede a quebra de linha */
  position: relative;

  &::-webkit-scrollbar {
    display: block; /* Exibe a barra de rolagem no Chrome/Safari */
    height: 12px; /* Altura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da barra de rolagem */
    border-radius: 10px; /* Bordas arredondadas */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor da barra de rolagem ao passar o mouse */
  }

  -ms-overflow-style: auto; /* Exibe a barra de rolagem no IE */
  scrollbar-width: auto; /* Exibe a barra de rolagem no Firefox */
  scrollbar-color: #888 #f0f4f8; /* Cor da barra de rolagem no Firefox */
`;

export const BoxSkill = styled.div`
  background-color: #f0f4f8;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 0 0 auto;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;

  &:last-child {
    margin-right: 0;
  }
`;

export const Img = styled.img`
  background-color: transparent;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const TituloSkill = styled.h3`
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  color: #282938;
  margin-bottom: 10px;
`;

export const InforSkill = styled.p`
  font-size: 14px;
  background-color: transparent;
  font-weight: lighter;
  overflow-wrap: break-word; /* Quebra de texto automática */
  word-wrap: break-word; /* Quebra de texto automática */
  color: #282938;
  white-space: pre-wrap;
  text-align: justify;

  a {
    color: blue;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
