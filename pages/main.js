import React from "react";
import Link from "next/link";
import css from "styled-jsx/css";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import sanity, { mkUrl } from "../lib/sanity";

const videoQuery = `*[_type == "backgroundVideo" ]{description, "url": video.asset->url}[0]`;
const contentQuery = `*[_type == "article"
                      || _type == "case"
                      || _type == "jobAd"]{title, "cat": categories[0]->{title}, "imageUrl": mainImage.asset -> url}`;

let ContentCard = props => (
  <Link href="">
    <a className="grid__item">
      <div className="grid__content">
        <div className="grid__image-container">
          <div className="grid__image">
            <img
              src={mkUrl(sanity)(props.imageUrl)
                .width("300")
                .height("300")
                .url()}
              alt=""
            />
          </div>
        </div>
        <div className="grid__text">
          <ul className="grid__tags" />
          <p className="grid__intro" />
        </div>
      </div>
      <div className="grid__category">
        <p>{props.cat.title}</p>
      </div>
      <div className="grid__header">
        <h2>{props.title}</h2>
      </div>
      <style jsx>{`
        img {
          object-fit: cover;
        }
      `}</style>
    </a>
  </Link>
);

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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "40px 5%"
          }}
        >
          {this.props.content.map(thing => (
            <div className="content">
              <ContentCard {...thing} />
            </div>
          ))}
        </div>
        <style jsx>{`
          .content:first-child {
            border-top: 30px solid transparent;
          }
          .content {
            margin: 40px;
            width: 300px;
          }
          a {
            color: black;
            text-decoration: none;

        `}</style>
      </Layout>
    );
  }
}
