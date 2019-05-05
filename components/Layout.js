import Head from "next/head";
import Link from "next/link";
import globalStyles from "./styles/global";
import styles from "./styles/layout";
import Header from "../components/header.js";
export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sanity + Creuna Poc</title>
    </Head>
    <Header />
    <main style={{ margin: "0 2rem" }}>{props.children}</main>
    <footer>And this here is the footer</footer>
    <style jsx>{styles}</style>
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);
