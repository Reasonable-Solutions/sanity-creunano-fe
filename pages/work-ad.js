import BlockContent from "@sanity/block-content-to-react";
import React from "react";

import PersonCard from "../components/personCard";
import Hero from "../components/HeroContent";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import sanityClient, {mkUrl, sanitClient} from "../lib/sanity";
import styles from "./styles/work-ad.js";

let query = `*[_type == "jobAd" && _id==$id]{
_id,
 title,
 subtitle,
 body,
 "imageUrl": mainImage.asset->url,
 "contacts" :author[] -> {name, email, phone, "image": image.asset->url},
 externalLink
 }[0]`;

let Jobad = props => (
  <div>
    <div className="jobAd">
      <BlockContent blocks={props.body} />
      <div className="jobAd-contacts">
        {props.contacts.map(contact => (
          <PersonCard {...contact} key={contact.email} />
        ))}
      </div>
      <a href={props.externalLink}>Søk på denne stillingen &#8669;</a>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default class WorkAd extends React.Component {
  static async getInitialProps(req) {
    return { ad: await sanity.fetch(query, { id: req.query.id }) };
  }

  render() {
    const { ad } = this.props;
    return (
      <Layout>
        <Hero {...ad} mkUrl={mkUrl(sanityClient)} />
        <Jobad {...ad} />
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

export { Jobad };
