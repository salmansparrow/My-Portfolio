import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import HeroPage from "../../components/hero.js/hero";
import Layout from "../../components/layout/layout";
import Project from "../../components/project/Project";
import SKills from "../../components/skills/Skills";

function Home() {
  return (
    <>
      <Layout>
        <HeroPage />
        <About />
        <SKills />
        <Project />
        <Contact />
      </Layout>
    </>
  );
}

export default Home;
