import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import sanity from "../lib/sanity";

const query = `*[_type == "backgroundVideo"]{description, "url": video.asset->url}[0]`;

export default class Main extends React.Component {
  static async getInitialProps() {
    return { video: await sanity.fetch(query) };
  }

  render() {
    const { video } = this.props;
      return (
      <Layout videoUrl={video.url}>
              <Footer videoUrl={video.url}/>
            <h1>Real memes, real fast</h1>
       </Layout >
    );
  }
}
