import React from "react";
import Link from "next/link";
import style from "./styles/headerLogo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-logo">
        <svg
          viewBox="0 -10 240 80"
          xmlns="http://www.w3.org/2000/svg"
          class="header-logo__background"
        >
          <rect width="100%" height="140" fill="white" />
          <text
            x="0"
            y="50"
            style={{ font: "bolder", fontSize: "80px" }}
            dx="0 -10 -10 -10 -10 -10"
          >
            Creuna
          </text>
        </svg>
        <div className="header-logo__text">
          <h1>REAL MEMES REAL WEB REAL FAST REAL GOOD REAL REEL</h1>
        </div>
        <style>{style}</style>
      </div>
    );
  }
}
