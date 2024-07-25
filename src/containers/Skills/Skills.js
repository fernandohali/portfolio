import React, { useEffect, useRef } from "react";
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

export function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = skillsRef.current;
    let scrollAmount = 0;
    const scrollStep = 1.3; // Ajuste a velocidade de rolagem aqui
    const scrollInterval = setInterval(() => {
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia o scroll
      } else {
        scrollAmount += scrollStep;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, 50); // Ajuste a frequência de rolagem aqui (milissegundos)

    return () => clearInterval(scrollInterval); // Limpa o intervalo quando o componente é desmontado
  }, []);
  const skills = [
    {
      title: "Estratégia & Direção",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      title: "Desenvolvimento de Jogos",
      info: `- Projeto: ValorantGuia
Linguagem: Java Android
<a href="https://github.com/fernandohali/ValorantGuia" target="_blank" rel="noopener noreferrer">GitHub Link</a>
Descrição: Desenvolvimento de um aplicativo Android chamado ValorantGuia, projetado para servir como um guia detalhado para o jogo Valorant. O aplicativo apresenta informações sobre os mapas do jogo e a localização dos agentes. Além disso, inclui vídeos que mostram os melhores pontos de referência (pixels) nos mapas para estratégias de jogo.
      `,
    },
    {
      title: "Desenvolvimento Mobile",
      info: ` - Linguagem Mobile: React Native
- Projeto: Gerenciamento de sala
Linguagem: JavaScript, Framework: React Native 
<a href="https://github.com/EngenhariaSoftware123/Gest-o-salas-front-nativo" target="_blank" rel="noopener noreferrer">GitHub Link</a>
Descrição: Desenvolvimento de um aplicativo móvel utilizando React Native para gerenciar as salas da Universidade Estadual do Sudoeste da Bahia (UESB). O aplicativo foi projetado para facilitar o controle e a organização das salas de aula, permitindo que usuários reservem, consultem e gerenciem as salas de maneira eficiente.
      `,
    },
    {
      title: "Desenvolvimento Web",
      info: `
        - Desenvolvimento Web: HTML, CSS, JavaScript
        - Frameworks: React.js, Spring Boot, Node.js
      `,
    },
    {
      title: "Branding & Logo",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <Container>
      <MySkills>My Skills</MySkills>
      <Experiencia>My Expertise</Experiencia>
      <SkillsWrapper ref={skillsRef}>
        {skills.concat(skills).map((skill, index) => (
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
