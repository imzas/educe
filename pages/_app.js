import Head from "next/head";
import { Layout } from "components/common";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>
          Vidyavas - Find Courses and your favourite Institutes in India and
          Abroad
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
