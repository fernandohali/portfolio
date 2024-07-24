import styled from "styled-components";

export const Container = styled.div`
  background-color: white;

  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MySkills = styled.h1`
  font-size: 13px;
  color: black;
  font-weight: bold;
  margin: 10px;
  background-color: transparent;

  @media (max-width: 466px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Experiencia = styled.h2`
  font-size: 30px;
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
export const BoxSkills = styled.div`
  @media (max-width: 466px) {
  }
`;
