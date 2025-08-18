import React, { useState } from "react";
import {
  Container,
  ContentWrapper,
  LinksContainer,
  Menu,
  Toggle,
  SocialIconList,
  FooterBottom,
  ContainerComponetes,
  Divider,
  CopyrightText,
  PolicyLinks,
} from "./Styles";
import shareIcon from "../../assets/IconsSocial/icons8-compartilhar.png";
import linkedinIcon from "../../assets/IconsSocial/icons8-linkedin-50.png";
import youtubeIcon from "../../assets/IconsSocial/icons8-youtube-50.png";
import instagramIcon from "../../assets/IconsSocial/icons8-instagram-50.png";
import githubIcon from "../../assets/IconsSocial/icons8-github-50.png";

export function Footer() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <ContentWrapper>
        <ContainerComponetes>
          <LinksContainer>
            <a href="#home">Home</a>
            <a href="#sobreMim">Sobre mim</a>
            <a href="#skills">Experiência</a>
            <a href="#contateMe">Contate-me</a>
          </LinksContainer>

          <Menu className={isActive ? "active" : ""}>
            <Toggle onClick={handleToggle} className="toggle">
              <img src={shareIcon} alt="Redes Sociais" />
            </Toggle>
            <SocialIconList isActive={isActive}>
              <li style={{ "--i": 0, "--clr": "#0077b5" }}>
                <a
                  href="https://www.linkedin.com/in/fernando-hali-santos-andrade-234624229/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </li>
              <li style={{ "--i": 1, "--clr": "#ff0000" }}>
                <a
                  href="https://www.youtube.com/channel/UCBHzdNosD3ohdsdYzYAlmAA"
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube"
                >
                  <img src={youtubeIcon} alt="YouTube" />
                </a>
              </li>
              <li style={{ "--i": 2, "--clr": "#e1306c" }}>
                <a
                  href="https://www.instagram.com/nandohsd/"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </li>
              <li style={{ "--i": 3, "--clr": "#333" }}>
                <a
                  href="https://github.com/fernandohali"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </li>
            </SocialIconList>
          </Menu>
        </ContainerComponetes>

        <Divider />

        <FooterBottom>
          <CopyrightText>
            © 2025 Fernando Hali. Feito com � e muito café.
          </CopyrightText>
          <PolicyLinks>
            <a href="#privacyPolicy">Política de Privacidade</a>
            <a href="#termsOfService">Termos de Uso</a>
          </PolicyLinks>
        </FooterBottom>
      </ContentWrapper>
    </Container>
  );
}
