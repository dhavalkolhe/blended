import Head from "next/head";

import FeedbackForm from "../components/elements/FeedbackForm/FeedbackForm";

function Feedback() {
  return (
    <div>
      <Head>
        <title>Blender Feedback</title>
      </Head>
      <FeedbackForm />
    </div>
  );
}

export default Feedback;
