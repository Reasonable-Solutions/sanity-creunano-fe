import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/HeroContent";
import JobCard from "../components/JobCard";
import sanity from "../lib/sanity";
import styles from "./styles/work-at";

const query = `*[_type == "jobAd"]{
_id,
 title,
 subtitle,
 "imageUrl": mainImage.asset->url,
 }`;

const videoQuery = `*[_type == "backgroundVideo"]{description, "url": video.asset->url}[0]`;

const imageQuery = `*[_type == "jobAd"]{
 "imageUrl": mainImage.asset->url,
 }[0]`;

export default class WorkAt extends React.Component {
  static async getInitialProps() {
    return {
      jobAds: await sanity.fetch(query),
      image: await sanity.fetch(imageQuery),
      video: await sanity.fetch(videoQuery)
    };
  }
  render() {
    return (
      <Layout videoUrl={this.props.video.url}>
        <Hero
          title="Work here"
          subtitle="it's fun"
          imageUrl={this.props.image.imageUrl}
        />

        <div style={{ background: "whitesmoke" }}>
          <ul>
            {this.props.jobAds.map(ad => (
              <li key={ad._id}>
                <JobCard {...ad} />
              </li>
            ))}
          </ul>
          <style jsx>{styles}</style>
        </div>
      </Layout>
    );
  }
}
