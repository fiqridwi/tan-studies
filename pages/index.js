import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/organisms/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tan Studies</title>
      </Head>
      <Header />
    </div>
  );
}
