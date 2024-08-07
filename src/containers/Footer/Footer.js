import React, { useState } from "react";
import {
  Container,
  LinksContainer,
  Menu,
  Toggle,
  SocialIconList,
  FooterBottom,
  ContainerComponetes,
  MiddleBar, // Importação da nova tarja
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
      <ContainerComponetes>
        <LinksContainer>
          <a href="#home">Home</a>
          <a href="#sobreMim">Sobre mim</a>
          <a href="#contateMe">Contate-me</a>
        </LinksContainer>

        <Menu className={isActive ? "active" : ""}>
          <Toggle onClick={handleToggle}>
            <img src={shareIcon} alt="Compartilhar" />
          </Toggle>
          <SocialIconList isActive={isActive}>
            <li style={{ "--i": 0, "--clr": "#1da1f2" }}>
              <a
                href="https://www.linkedin.com/in/fernando-hali-santos-andrade-234624229/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
            <li style={{ "--i": 1, "--clr": "#FF5733" }}>
              <a
                href="https://www.youtube.com/channel/UCBHzdNosD3ohdsdYzYAlmAA"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </li>
            <li style={{ "--i": 2, "--clr": "#FD3B00" }}>
              <a
                href="https://www.instagram.com/nandohsd/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
            <li style={{ "--i": 3, "--clr": "#141313" }}>
              <a
                href="https://github.com/fernandohali"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </li>
          </SocialIconList>
        </Menu>
      </ContainerComponetes>

      <MiddleBar />

      <FooterBottom>
        <span>Feito com 💖 por Fernando Hali</span>
        {/*  <div>
          <a href="#privacyPolicy">Privacy Policy</a>
          <a href="#termsOfService">Terms of Service</a>
          <a href="#cookieSettings">Cookies Settings</a>
        </div> */}
      </FooterBottom>
    </Container>
  );
}
