import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Me from "../components/Me";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-scroll z-0">
      <Head>
        <title>Curtis Turk</title>
        <meta name="description" content="Curtis Turk: portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="me" className="snap-start">
        <Me />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About></About>
      </section>
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
}
