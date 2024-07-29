import React, { useRef } from "react";
import {
  Container,
  MySkills,
  Experiencia,
  SkillsWrapper,
  BoxSkill,
  TituloSkill,
  InforSkill,
  Img,
} from "./Styles";

// Importe as imagens diretamente
import iconValorant from "../../assets/IconsExpertise/iconValorant.png";
import iconUesb from "../../assets/IconsExpertise/iconUesb.png";
import iconsite from "../../assets/IconsExpertise/iconSite.png";

export function Skills() {
  const skillsRef = useRef(null);

  const skills = [
    {
      imgSrc: iconValorant,
      title: "Desenvolvimento Mobile",
      info: `Projeto: ValorantGuia
Linguagem: Java Android
<a href="https://github.com/fernandohali/ValorantGuia" target="_blank" rel="noopener noreferrer">GitHub Link</a>
<a href="https://www.figma.com/proto/neUeRBr4dqV9HajqwnZpYa/Valorent?node-id=1-4&starting-point-node-id=1%3A4" target="_blank" rel="noopener noreferrer">Projeto no Figma Link</a>

Descrição: Desenvolvimento de um aplicativo Android chamado ValorantGuia, projetado para servir como um guia detalhado para o jogo Valorant. O aplicativo apresenta informações sobre os mapas do jogo e a localização dos agentes. Além disso, inclui vídeos que mostram os melhores pontos de referência (pixels) nos mapas para estratégias de jogo.`,
    },
    {
      imgSrc: iconUesb,
      title: "Desenvolvimento Mobile",
      info: `Linguagem Mobile: React Native
Projeto: Gerenciamento de sala
Framework: React Native 
<a href="https://github.com/EngenhariaSoftware123/Gest-o-salas-front-nativo" target="_blank" rel="noopener noreferrer">GitHub Link</a>
<a href="https://www.figma.com/design/YGRe6LAnsEULo4BvpYxhAj/engenharia-de-software?node-id=0-1&t=jKBRvAklbtyPIyb0-0" target="_blank" rel="noopener noreferrer">Projeto no Figma Link</a>

Descrição: Desenvolvimento de um aplicativo móvel utilizando React Native para gerenciar as salas da Universidade Estadual do Sudoeste da Bahia (UESB). O aplicativo foi projetado para facilitar o controle e a organização das salas de aula, permitindo que usuários reservem, consultem e gerenciem as salas de maneira eficiente.`,
    },
    {
      imgSrc: iconsite,
      title: "Desenvolvimento Web",
      info: `Frameworks: React.js
<a href="https://github.com/fernandohali/portfolio" target="_blank" rel="noopener noreferrer">GitHub Link</a>
    
Descrição: Criação de um portfólio pessoal utilizando React.js, projetado para exibir minhas habilidades e projetos de forma interativa e visualmente atraente. O portfólio inclui seções detalhadas sobre minhas habilidades técnicas, experiência profissional e projetos desenvolvidos. Utilizei o React.js para construir uma interface de usuário dinâmica e responsiva, garantindo que o site seja acessível e atraente em diversos dispositivos e tamanhos de tela. Além disso, o portfólio é otimizado para <abbr title = "SEO é um conjunto de técnicas e estratégias para sites ficarem melhor posicionados nos buscadores, gerar reconhecimento de marca, aumentar o tráfego e converter mais.">SEO</abbr> e performance, proporcionando uma experiência de navegação rápida e fluída.`,
    },
  ];

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <Container>
      <MySkills>Minhas Habilidades</MySkills>
      <Experiencia>Minha Experiência</Experiencia>
      <SkillsWrapper ref={skillsRef}>
        {skills.map((skill, index) => (
          <BoxSkill key={index}>
            <Img src={skill.imgSrc} alt={skill.title} />
            <TituloSkill>{skill.title}</TituloSkill>
            <InforSkill dangerouslySetInnerHTML={createMarkup(skill.info)} />
          </BoxSkill>
        ))}
      </SkillsWrapper>
    </Container>
  );
}
