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

// Importe as imagens diretamente
import iconValorant from "../../assets/IconsExpertise/iconValorant.png";
import iconUesb from "../../assets/IconsExpertise/iconUesb.png";

export function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = skillsRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Ajuste a velocidade de rolagem aqui
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
      title: "Desenvolvimento Mobile",
      info: `Projeto: ValorantGuia
Linguagem: Java Android
<a href="https://github.com/fernandohali/ValorantGuia" target="_blank" rel="noopener noreferrer">GitHub Link</a>
<a href = "https://www.figma.com/proto/neUeRBr4dqV9HajqwnZpYa/Valorent?node-id=1-4&starting-point-node-id=1%3A4" target="_blank" rel="noopener noreferrer">Projeto no Figma Link</a>

Descrição: Desenvolvimento de um aplicativo Android chamado ValorantGuia, projetado para servir como um guia detalhado para o jogo Valorant. O aplicativo apresenta informações sobre os mapas do jogo e a localização dos agentes. Além disso, inclui vídeos que mostram os melhores pontos de referência (pixels) nos mapas para estratégias de jogo.
`,
      imgSrc: iconValorant, // Use a imagem importada
    },
    {
      title: "Desenvolvimento Mobile",
      info: `Linguagem Mobile: React Native
Projeto: Gerenciamento de sala
Framework: React Native 
<a href="https://github.com/EngenhariaSoftware123/Gest-o-salas-front-nativo" target="_blank" rel="noopener noreferrer">GitHub Link</a>
<a href = "https://www.figma.com/design/YGRe6LAnsEULo4BvpYxhAj/engenharia-de-software?node-id=0-1&t=jKBRvAklbtyPIyb0-0" target="_blank" rel="noopener noreferrer">Projeto no Figma Link</a>

Descrição: Desenvolvimento de um aplicativo móvel utilizando React Native para gerenciar as salas da Universidade Estadual do Sudoeste da Bahia (UESB). O aplicativo foi projetado para facilitar o controle e a organização das salas de aula, permitindo que usuários reservem, consultem e gerenciem as salas de maneira eficiente.
      `,
      imgSrc: iconUesb,
      // Adicione outras imagens se necessário
    },
    {
      title: "Desenvolvimento Web",
      info: `
        - Desenvolvimento Web: HTML, CSS, JavaScript
        - Frameworks: React.js
        O site 
      `,
    },
  ];

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <Container>
      <MySkills>Minhas Habilidades</MySkills>
      <Experiencia>Minha experiência</Experiencia>
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
