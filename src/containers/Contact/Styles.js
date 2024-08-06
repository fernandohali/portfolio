import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 600px; /* Ajusta a largura máxima para ser mais responsiva */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
  border-radius: 8px;

  @media (max-width: 600px) {
    margin-left: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem; /* Ajuste o tamanho da fonte conforme necessário */
`;

export const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem; /* Ajuste o tamanho da fonte conforme necessário */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

//
export const MaskedInput = styled(InputMask)`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

export const Select = styled.select`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;

  @media (max-width: 600px) {
    element.style {
      height: 174px;
      width: 368px;
    }
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
  width: 50%;

  margin: 0 auto;

  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${Input} {
    flex: 1;
  }

  @media (max-width: 600px) {
    row-gap: 0rem;
    flex-direction: column;

    ${Input} {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const ContantContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${Input}, ${MaskedInput} {
    flex: 1;
  }

  @media (max-width: 600px) {
    row-gap: 0rem;
    flex-direction: column;

    ${Input}, ${MaskedInput} {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;
