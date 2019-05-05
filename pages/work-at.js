import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import sanity from "../lib/sanity";
import sanityClient from "../lib/sanity";

const query = `*[_type == "jobAd"]{_id, title, subtitle, mainImage}`;

export default class WorkAt extends React.Component {
  static async getInitialProps() {
    return { jobAds: await sanity.fetch(query) };
  }
  render() {
    return (
      <Layout>
        <p> you could work here too! </p>
        <ul>
          {this.props.jobAds.map(ad => (
            <li>
              <Link href={{ pathname: "/work-ad", query: { id: ad._id } }}>
                <div>
                  <h1>{ad.title}</h1>
                  <p>{ad.subtitle}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
