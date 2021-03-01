import Head from "next/head";
import { Layout } from "../containers";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vidyavas</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* <Layout>hello</Layout> */}
      <div className="h-screen bg-green-300 flex flex-col justify-center items-center">
        <img src="./vidyavas.png" width="300" alt="logo" />
        <h2 className="text-3xl uppercase font-semibold font-sans mt-12">
          We will be launching soon
        </h2>
      </div>
    </>
  );
}
