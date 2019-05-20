import React from "react";
import Link from "next/link";
import style from "./styles/header";
import Logo from "./HeaderLogo";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link href="/work-at">
            <a>Work at Creuna</a>
          </Link>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
          <Link href="/news">
            <a>News</a>
          </Link>
        </nav>
        <style jsx>{style}</style>
      </header>
    );
  }
}
