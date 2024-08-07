import React from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Skills } from "../Skills/Skills";
import { SobreMim } from "../SobreMim/SobreMim";
/* import { RecentProjects } from "../RecentProjects/RecentProjects"; */
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <Main />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">{/* <RecentProjects /> */}</section>
      <section id="sobreMim">
        <SobreMim />
      </section>
      <section id="contateMe">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
