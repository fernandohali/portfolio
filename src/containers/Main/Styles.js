import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5fcff83;
  display: flex;
  align-items: center;
  height: auto;
  padding: 2rem 2rem 4rem;
  text-align: left;
  box-shadow: inset 1px 8px 20px 2px rgba(0, 0, 0, 0.1); // Sombra na parte inferior
  margin: 0 auto;
  border-radius: 1px;
  border-bottom: 1px solid #0c1cf53d;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  max-width: 600px;
  flex: 1;
  background-color: transparent;
  font-family: "Roboto", sans-serif; /* Aplicando a fonte ao InfoContainer */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo */
    text-align: center; /* Centraliza o texto */

    flex: 1;
    align-items: center;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Name = styled.h1`
  font-size: 13px;
  color: #000;
  font-weight: bold;
  background-color: transparent;
  font-family: "Roboto", sans-serif; /* Aplicando a fonte */
  @media (max-width: 466px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Profissao = styled.h2`
  font-size: 43px;
  color: #000;
  font-weight: bold;
  margin: 20px 20px 20px 0px;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  overflow-wrap: break-word; /* Quebra de texto automática */
  word-wrap: break-word; /* Quebra de texto automática */
  color: #282938;
  @media (max-width: 466px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .highlight {
    font-family: "Roboto", sans-serif;
    background-color: transparent;
    color: #5e3bee;
  }
`;

export const Sobremim = styled.p`
  font-size: 13px;
  width: 481px;

  background-color: transparent;

  font-weight: lighter;
  overflow-wrap: break-word; /* Quebra de texto automática */

  word-wrap: break-word; /* Quebra de texto automática */
  color: #282938;

  @media (max-width: 466px) {
    width: auto;
    font-weight: lighter;
    overflow-wrap: break-word; /* Quebra de texto automática */
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  background-color: #5e3bee;
  width: 123px;
  height: 51px;
  color: white;
  border: none;
  margin-top: 41px;
  padding: 0.75rem 0.2rem;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5.33px;
  transition: background-color 0.3s ease;
  font-family: "Roboto", sans-serif; /* Aplicando a fonte */

  &:hover {
    background-color: #5548c8;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
  }
`;
export const Img = styled.img`
  max-width: 600px;
  max-height: 450px;
  margin-left: 4rem;
  background-color: transparent;
  mix-blend-mode: multiply; /* Ajuste o modo de mistura */

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    max-width: 300px;
  }
  @media (max-width: 980px) {
    margin-left: 0;
    margin-top: 2rem;
    max-width: 300px;
  }
`;
