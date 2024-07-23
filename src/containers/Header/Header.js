import React from "react";
import { Container, NavItem, Div } from "./Styles.js";

export function Header() {
  return (
    <Container>
      <NavItem>Home</NavItem>
      <NavItem>Portfolio</NavItem>
      <NavItem>Sobre mim</NavItem>
      <Div>
        <NavItem>Contate-me</NavItem>
      </Div>
    </Container>
  );
}
