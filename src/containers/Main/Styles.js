import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5fcff;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoContainer = styled.div`
  max-width: 600px;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Name = styled.h1`
  font-size: 1.5rem; /* Corrigido de 15px para 1.5rem */
  color: #000; /* Preto */
  font-weight: bold; /* Negrito */
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;

  @media (max-width: 466px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Profissao = styled.h2`
  font-size: 1.2rem;
  color: #000; /* Preto */
  font-weight: bold; /* Negrito */
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 466px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .highlight {
    color: #6c63ff; /* Roxo */
  }
`;

export const Button = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5548c8;
  }

  @media (max-width: 466px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Sobremim = styled.p``;

export const Img = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 488px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    max-width: 300px;
  }
`;
