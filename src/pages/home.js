import Head from "next/head";

import Countdown from "../components/elements/Countdown/Countdowm";

function Home() {
  return (
    <div>
      <Head>
        <title>Blender Home</title>
      </Head>
      <Countdown />
    </div>
  );
}

export default Home;
