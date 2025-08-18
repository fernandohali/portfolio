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
      <section id="home" className="section-padding">
        <div className="container">
          <Main />
        </div>
      </section>
      <section id="skills" className="section-padding">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section id="portfolio" className="section-padding">
        <div className="container">{/* <RecentProjects /> */}</div>
      </section>
      <section id="sobreMim" className="section-padding">
        <SobreMim />
      </section>
      <section id="contateMe" className="section-padding">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
