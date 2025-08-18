import React from "react";
import {
  Container,
  ContentWrapper,
  Img,
  InfoContainer,
  AboutMe,
  AboutText,
} from "./Styles";

export function SobreMim() {
  return (
    <Container>
      <ContentWrapper>
        <Img src={require("../../assets/Foto2.jpg")} alt="Fernando Hali" />
        <InfoContainer>
          <AboutMe>Desenvolvedor Full Stack</AboutMe>
          <AboutText>
            Sou um desenvolvedor apaixonado por tecnologia com experiência
            sólida em desenvolvimento de software moderno. Especializado em
            criar soluções inovadoras e eficientes, sempre buscando as melhores
            práticas e tecnologias mais recentes do mercado.
          </AboutText>
          <AboutText>
            Com forte experiência em programação orientada a objetos e
            metodologias ágeis, tenho a capacidade de transformar ideias
            complexas em produtos digitais funcionais e intuitivos. Valorizo o
            trabalho colaborativo e estou sempre em busca de novos desafios que
            me permitam crescer profissionalmente.
          </AboutText>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
}
