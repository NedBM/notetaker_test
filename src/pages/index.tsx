import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Note Taker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>

    </>
  );
};

export default Home;
