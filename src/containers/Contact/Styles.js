import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 600px; /* Ajuste a largura máxima conforme necessário */
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
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 100px;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    margin-right: 0.5rem;
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

  &:hover {
    background-color: #0056b3;
  }
`;
