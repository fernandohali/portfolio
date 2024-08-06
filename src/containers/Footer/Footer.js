import React, { useState } from "react";
import {
  Container,
  LinksContainer,
  Menu,
  Toggle,
  SocialIconList,
} from "./Styles";
import shareIcon from "../../assets/IconsSocial/icons8-compartilhar.png";
import linkedinIcon from "../../assets/IconsSocial/icons8-linkedin-50.png";
import youtubeIcon from "../../assets/IconsSocial/icons8-youtube-50.png";
import instagramIcon from "../../assets/IconsSocial/icons8-instagram-50.png";
import githubIcon from "../../assets/IconsSocial/icons8-github-50.png";

export function Footer() {
  // Estado para controlar a visibilidade do menu
  const [isActive, setIsActive] = useState(false);

  // Função para alternar o estado do menu
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <LinksContainer>
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contateMe">Contato</a>
      </LinksContainer>
      {/* Menu com a classe 'active' dependendo do estado */}
      <Menu className={isActive ? "active" : ""}>
        {/* Botão para abrir/fechar o menu */}
        <Toggle onClick={handleToggle}>
          <img src={shareIcon} alt="Compartilhar" />
        </Toggle>
        {/* Lista de ícones sociais com visibilidade controlada pelo estado */}
        <SocialIconList isActive={isActive}>
          {/* Ícone do LinkedIn */}
          <li style={{ "--i": 0, "--clr": "#1da1f2" }}>
            <a
              href="https://www.linkedin.com/in/fernando-hali-santos-andrade-234624229/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
          {/* Ícone do YouTube */}
          <li style={{ "--i": 1, "--clr": "#FF5733" }}>
            <a
              href="https://www.youtube.com/channel/UCBHzdNosD3ohdsdYzYAlmAA"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </li>
          {/* Ícone do Instagram */}
          <li style={{ "--i": 2, "--clr": "#FD3B00" }}>
            <a
              href="https://www.instagram.com/nandohsd/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </li>
          {/* Ícone do GitHub */}
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
    </Container>
  );
}
