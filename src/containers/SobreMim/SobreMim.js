import React from "react";
import { Container, Img, InfoContainer, AboutMe, AboutText } from "./Styles";

export function SobreMim() {
  return (
    <Container>
      <Img src={require("../../assets/Foto2.jpg")} alt="Fernando Hali" />
      <InfoContainer>
        <AboutMe>Sobre mim</AboutMe>
        <AboutText>
          Sou um programador motivado com experiência em desenvolvimento de
          software. Com habilidades em programação orientada a objetos, tenho a
          capacidade de desenvolver e implementar soluções de software
          inovadoras. Sou altamente adaptável e capaz de trabalhar efetivamente
          em ambientes de equipe ou individualmente.
        </AboutText>
      </InfoContainer>
    </Container>
  );
}
