import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import sanity from "../lib/sanity";
import sanityClient from "../lib/sanity";
import styles from "./styles/work-at";

const query = `*[_type == "jobAd"]{
_id,
 title,
 subtitle,
 "imageUrl": mainImage.asset->url,
 }`;

export default class WorkAt extends React.Component {
  static async getInitialProps() {
    return { jobAds: await sanity.fetch(query) };
  }
  render() {
    return (
      <Layout>
        <div style={{ background: "whitesmoke" }}>
          <ul>
            {this.props.jobAds.map(ad => (
              <li>
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
