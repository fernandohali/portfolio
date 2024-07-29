import React from "react";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Skills } from "../Skills/Skills";
import { SobreMim } from "../SobreMim/SobreMim";
import { RecentProjects } from "../RecentProjects/RecentProjects";
import { Contact } from "../Contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <SobreMim />
      <RecentProjects />
      <Contact />
    </div>
  );
}

