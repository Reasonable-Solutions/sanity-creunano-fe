import React from "react";
import Link from "next/link";
import sanity from "../lib/sanity";

const query = `*[_type == "backgroundVideo"]{description, "url": video.asset->url}[0]`;
export default class Events extends React.Component {
  static async getInitialProps() {
      return {video: await sanity.fetch(query)};
  }
    render() {
        console.log ('eh', this.props)
    return (
      <footer>
        <p> he? {this.props.video.description}</p>
        <video
        src={this.props.video.url}
          autoPlay="autoplay"
          muted="true"
          loop="loop"
          playsInline="true"
        />
      </footer>
    );
  }
}
