import React from "react";
import { Container, NavItemsContainer, NavItem, Div } from "./Styles.js";

export function Header() {
  return (
    <Container>
      <NavItemsContainer>
        <NavItem>
          <a href="#home">Home</a>
        </NavItem>
       {/*  <NavItem>
          <a href="#portfolio">Portfólio</a>
        </NavItem> */}
        <NavItem>
          <a href="#sobreMim">Sobre mim</a>
        </NavItem>
        <NavItem>
          <a href="#skills">Experiência</a>
        </NavItem>
      </NavItemsContainer>
      <Div>
        <NavItem>
          <a href="#contateMe">Contate-me</a>
        </NavItem>
      </Div>
    </Container>
  );
}
