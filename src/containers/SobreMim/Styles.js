import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  display: flex; /* Dispor os elementos horizontalmente */
  align-items: center; /* Alinhar verticalmente no centro */
  @media (max-width: 768px) {
    flex-direction: column; /* Dispor os elementos verticalmente em telas pequenas */
    align-items: flex-start;
  }
`;

export const InfoContainer = styled.div`
  max-width: 600px;
  flex: 1;
  background-color: transparent;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem; /* Espaço entre a imagem e o texto em telas pequenas */
  }
`;

export const AboutMe = styled.h2`
  margin: 32px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const AboutText = styled.p`
  font-size: 16px;

  margin: 15px 32px;
  font-size: 1em;
  line-height: 2em;
  background-color: transparent;
  font-weight: lighter;
  overflow-wrap: break-word; /* Quebra de texto automática */
  word-wrap: break-word; /* Quebra de texto automática */
  color: #282938;
  white-space: pre-wrap;
  text-align: justify;
`;

export const Img = styled.img`
  max-width: 600px;
  max-height: 450px;
  margin-right: 4rem; /* Espaço entre a imagem e o contêiner de informações */
  background-color: transparent;
  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
    max-height: auto;
  }
`;
