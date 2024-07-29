import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px; /* Ajuste a largura máxima conforme necessário */
`;

export const RecentProj = styled.h2`
  margin: 30px;
  margin-top: 40px;
  font-size: 13px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const MyPortfolio = styled.h2`
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: bold;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProjectCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33% - 2rem); /* Três colunas com espaço entre elas */

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;
