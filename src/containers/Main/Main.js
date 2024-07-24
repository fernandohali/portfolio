import React from "react";
import {
  Container,
  InfoContainer,
  Name,
  Profissao,
  Button,
  Img,
  Sobremim,
} from "./Styles.js";

export function Main() {
  return (
    <Container>
      <InfoContainer>
        <Name>Ei, eu sou Fernando Hali</Name>
        <Profissao>
          Sou <span className="highlight">desenvolvedor software</span> e
          experiência de software
        </Profissao>
        <Sobremim>
          Sou um programador qualificado, especializado em soluções inovadoras,
          com habilidades para transformar desafios em oportunidades.
        </Sobremim>
        <Button>Entre em Contato</Button>
      </InfoContainer>
      <Img src={require("../../assets/foto.png")} alt="Fernando Hali" />
    </Container>
  );
}
