import { useEffect, useState } from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import HeroPage from "../../components/hero.js/hero";
import Layout from "../../components/layout/layout";
import Project from "../../components/project/Project";
import Meta from "../../meta/Meta";
import Skills from "../../components/skills/Skills";
import ScrollTracker from "../../meta/ScrollTracker";

function Home() {
  const [pageTitle, setPageTitle] = useState("Home");
  return (
    <>
      <Meta title={pageTitle} />
      <ScrollTracker setPageTitle={setPageTitle} />
      <Layout>
        <section id="home">
          <HeroPage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </>
  );
}

export default Home;
