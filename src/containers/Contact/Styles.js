import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 600px; /* Ajuste a largura máxima conforme necessário */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

//
export const MaskedInput = styled(InputMask)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 100px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid blue;
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
    flex-direction: column;

    ${Input} {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;
