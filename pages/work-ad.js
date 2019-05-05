import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import BlockContent from "@sanity/block-content-to-react";
import sanity from "../lib/sanity";
import sanityClient from "../lib/sanity";

const query = `*[_type == "jobAd" && _id==$id]{
_id,
 title,
 subtitle,
 body,
 mainImage,
 "contact":author -> {name},
 externalLink
 }[0]`;

export default class WorkAt extends React.Component {
  static async getInitialProps(req) {
    return { ad: await sanity.fetch(query, { id: req.query.id }) };
  }

  render() {
    const { ad } = this.props;
    console.log(this.props);
    return (
      <Layout>
        <h1>{ad.title}</h1>
        <p>{ad.subtitle}</p>
        <BlockContent blocks={ad.body} />
        <a href={ad.externalLink}>apply here</a>
      </Layout>
    );
  }
}
