import { useRouter } from "next/router";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

function RedirectPage({ ctx }) {
  const router = useRouter();
  // Check if we're in browser
  if (typeof window !== "undefined") {
    router.push("/home");
    return;
  }
}

RedirectPage.getInitialProps = (ctx) => {
  //ctx.res : to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/home" });
    ctx.res.end();
  }
  return {};
};

export default RedirectPage;
