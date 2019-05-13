import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import BlockContent from "@sanity/block-content-to-react";
import sanity from "../lib/sanity";
import sanityClient from "../lib/sanity";
import styles from "./styles/work-ad.js";
import imageUrlBuilder from "@sanity/image-url";

let builder = imageUrlBuilder(sanityClient);

let mkUrl = source => builder.image(source);

let query = `*[_type == "jobAd" && _id==$id]{
_id,
 title,
 subtitle,
 body,
 "imageUrl": mainImage.asset->url,
 "contact":author -> {name},
 externalLink
 }[0]`;

export default class WorkAd extends React.Component {
  static async getInitialProps(req) {
    return { ad: await sanity.fetch(query, { id: req.query.id }) };
  }

  render() {
    const { ad } = this.props;
    return (
      <Layout>
        <div className="hero-wrapper">
          <div className="hero">
            <div className="hero-content">
              <h1>{ad.title}</h1>
              <p>{ad.subtitle}</p>
            </div>
            <div
              className="hero-media"
              style={{ backgroundImage: `url(${mkUrl(ad.imageUrl)})` }}
            />
          </div>
        </div>
        <div className="jobAd">
          <BlockContent blocks={ad.body} />
          <a href={ad.externalLink}>apply here</a>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}
