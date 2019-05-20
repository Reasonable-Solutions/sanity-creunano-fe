import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import sanity, { mkUrl } from "../lib/sanity";

const videoQuery = `*[_type == "backgroundVideo" ]{description, "url": video.asset->url}[0]`;
const contentQuery = `*[_type == "article"
                      || _type == "case"
                      || _type == "jobAd"]{title, "imageUrl": mainImage.asset -> url}`;

export default class Main extends React.Component {
  static async getInitialProps() {
    return {
      video: await sanity.fetch(videoQuery),
      content: await sanity.fetch(contentQuery)
    };
  }

  render() {
    const { video } = this.props;
    return (
      <Layout videoUrl={video.url}>
        <Footer videoUrl={video.url} />
        <div>
          {this.props.content.map(thing => (
            <MainContentCard {...thing} />
          ))}
        </div>
      </Layout>
    );
  }
}

let MainContentCard = props => (
  <a className="grid__item" href="/no/arbeider/innlandet.-skum-floten/">
    <div className="grid__content">
      <div className="grid__image-container">
        <div className="grid__image">
          <img src={props.imageUrl} alt="" />
        </div>
      </div>

      <div className="grid__text">
        <ul className="grid__tags" />
        <p className="grid__intro" />
      </div>
    </div>
    <div className="grid__category">
      <p>Arbeid</p>
    </div>
    <div className="grid__header">
      <h2>{props.title}</h2>
    </div>
  </a>
);
