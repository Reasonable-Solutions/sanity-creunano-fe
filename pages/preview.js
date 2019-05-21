import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { sanityPreviewClient, queries } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import sanity from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Jobad } from "./work-ad";
import PersonCard from "../components/personCard";
import Hero from "../components/HeroContent";

let builder = imageUrlBuilder(sanity);
let mkUrl = source => builder.image(source);

export default class Preview extends React.Component {
  static async getInitialProps(req) {
    if (req.query.type === "jobAd") {
      return {
        preview: await sanityPreviewClient.fetch(queries.jobAd, {
          id: req.query.id
        })
      };
    } else {
      return {
        preview: await sanityPreviewClient.fetch(queries.person, {
          id: req.query.id
        })
      };
    }
  }

  render() {
    return (
      <>
        <h1>Real previews, real fast</h1>
        {previewMatch(this.props.url.query.type, this.props.preview)}
      </>
    );
  }
}

let previewMatch = (type, preview) => {
  switch (type) {
    case "jobAd":
      return (
        <>
          <Hero {...preview} mkUrl={mkUrl} />
          <Jobad {...preview} />
        </>
      );
    case "person":
      return <PersonCard {...preview} />;
  }
};
