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
  overflow-x: hidden; /* Oculta a rolagem horizontal */
  padding: 20px 0;
  white-space: nowrap; /* Impede que o conteúdo se quebre em múltiplas linhas */

  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem */
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
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

  &:last-child {
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const TituloSkill = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #282938;
  margin-bottom: 10px;
`;

export const InforSkill = styled.p`
  font-size: 14px;
  color: #6b7280;
  white-space: pre-wrap;
  text-align: left;

  a {
    color: blue;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;
