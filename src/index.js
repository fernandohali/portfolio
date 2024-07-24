import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./Styles/globalStyle";
import Home from "./containers/Home/Home";

const container = document.getElementById("root");
const root = createRoot(container); // Cria um root container

root.render(
  <>
    <Home /> 
    <GlobalStyle />
  </>
);
