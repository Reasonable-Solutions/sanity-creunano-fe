import React from "react";
import Link from "next/link";
import style from "./styles/header";
import Logo from "./HeaderLogo";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link href="/work-at">Work at Creuna</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/news">News</Link>
        </nav>
      </header>
    );
  }
}
