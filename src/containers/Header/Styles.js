import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 90%;
  margin-left: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

  &:hover {
    color: #007bff;
  }

  @media (max-width: 466px) {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`;

export const Div = styled.div`
  border-radius: 2px;
  background-color: black;
`;
