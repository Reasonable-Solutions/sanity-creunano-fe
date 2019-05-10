import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

const query = `*[_type == "person"] {name, bio, _id}[0...50]
`;

export default class Movies extends React.Component {
  static async getInitialProps() {
    return {
      person: await sanity.fetch(query)
    };
  }

  render() {
    const { person } = this.props;
    return (
      <Layout>
            <h1>Real memes, real fast</h1>
      </Layout>
    );
  }
}
