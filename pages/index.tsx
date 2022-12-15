import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curtis Turk</title>
        <meta name="description" content="Curtis Turk: portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-orange-500">Curtis</h1>
      {/* Header */}
      <Header />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact me */}
    </>
  );
}
