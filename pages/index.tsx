import Head from "next/head";
import Header from "../components/Header";
import Me from "../components/Me";

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

      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
}
