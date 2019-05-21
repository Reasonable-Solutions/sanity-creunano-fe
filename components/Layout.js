import Head from "next/head";
import Link from "next/link";
import globalStyles from "./styles/global";
import styles from "./styles/layout";
import Header from "../components/header";
import Footer from "../components/Footer";
import Logo from "../components/float-logo";
import Menu from "../components/menu";

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sanity + Creuna Poc</title>
    </Head>
    <Header />
    <Logo />
    <Menu />
    <main>{props.children}</main>
    <Footer videoUrl={props.videoUrl} />
    <style jsx>{styles}</style>
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);
