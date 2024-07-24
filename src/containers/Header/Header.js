import React from "react";
import { Container, NavItemsContainer, NavItem, Div } from "./Styles.js";

export function Header() {
  return (
    <Container>
      <NavItemsContainer>
        <NavItem>Home</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Sobre mim</NavItem>
      </NavItemsContainer>
      <Div>
        <NavItem>Contate-me</NavItem>
      </Div>
    </Container>
  );
}
