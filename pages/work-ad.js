import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";

import PersonCard from "../components/personCard";
import Hero from "../components/HeroContent";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import sanityClient from "../lib/sanity";
import styles from "./styles/work-ad.js";

let builder = imageUrlBuilder(sanity);

let mkUrl = source => builder.image(source);

let query = `*[_type == "jobAd" && _id==$id]{
_id,
 title,
 subtitle,
 body,
 "imageUrl": mainImage.asset->url,
 "contact":author -> {name, email, phone, "image": image.asset->url},
 externalLink
 }[0]`;

let Jobad = props => (
  <>
    <div className="jobAd">
      <BlockContent blocks={props.body} />
      <div class="jobAd-contacts">
        <PersonCard {...props.contact} />
      </div>
      <a href={props.externalLink}>Søk på denne stillingen &#8669;</a>
    </div>
    <style jsx>{styles}</style>
  </>
);

export default class WorkAd extends React.Component {
  static async getInitialProps(req) {
    return { ad: await sanity.fetch(query, { id: req.query.id }) };
  }

  render() {
    const { ad } = this.props;
    return (
      <Layout>
        <Hero {...ad} mkUrl={mkUrl} />
        <Jobad {...ad} />
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

export { Jobad };
