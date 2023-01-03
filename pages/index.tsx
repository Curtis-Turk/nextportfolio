import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Me from "../components/Me";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Curtis Turk</title>
        <meta name="description" content="Curtis Turk: portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="me" className="snap-center">
        <Me />
      </section>

      <section id="about" className="snap-center">
        <About></About>
      </section>
      <section id="projects" className="snap-start">
        <Projects></Projects>
      </section>
      <section id="skills" className="snap-start">
        <Skills></Skills>
      </section>
      <section id="experience" className="snap-center">
        <Experience></Experience>
      </section>
      <section id="contactMe" className="snap-center">
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}
