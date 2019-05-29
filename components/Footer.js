import React from "react";
import Link from "next/link";
import sanity from "../lib/sanity";
import style from "./styles/footer.js";
export default class Events extends React.Component {
  render() {
    return (
      <footer style={{ background: "black" }}>
        <video
          style={{ opacity: "0.5" }}
          src={this.props.videoUrl}
          autoPlay={"autoplay"}
          muted={true}
          loop={"loop"}
          playsInline={true}
        />
        <style jsx>{style}</style>
      </footer>
    );
  }
}
