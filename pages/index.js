import Head from "next/head";
import FullWidth from "../src/components/layout/fullWidth/FullWidth";

import UAParser from "ua-parser-js";

const Home = () => {
  return (
    <div>
      <Head>
        <title>andresin87</title>
        <meta name="description" content="never stop learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullWidth />
    </div>
  );
};

// This also gets called at build time
export async function getServerSideProps({ req }) {
  const ua = new UAParser(req.headers["user-agent"]);
  // console.log({ ...ua.getResult() });
  return {
    props: {
      ua: JSON.parse(JSON.stringify(ua.getResult())),
    },
  };
}

export default Home;
