import React from "react";
import Link from "next/link";
import style from "./styles/headerLogo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="main">
        <svg
          viewBox="0 -10 240 80"
          xmlns="http://www.w3.org/2000/svg"
          className="background"
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
        <div className="text">
          <h1>REAL MEMES REAL WEB REAL FAST REAL GOOD REAL REEL</h1>
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}
