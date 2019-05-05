import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import styles from "./styles/movies";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source) {
  return imageBuilder.image(source);
}

const query = `*[_type == "person"] {name, bio, _id}[0...50]
`;
const serializers = {
  types: {
    block: props => <p> {props.children} </p>
  }
};

export default class Movies extends React.Component {
  static async getInitialProps() {
    return {
      person: await sanity.fetch(query)
    };
  }

  render() {
    const { person } = this.props;
    return (
      <Layout>
        <div className="people">
          <ul className="list">
            {person.map(p => (
              <li key={p._id}>
                <Link href={{ url: "foo" }}>
                  <div>
                    <h1> {p.name} </h1>
                    <BlockContent blocks={p.bio} serializers={serializers} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{styles}</style>
      </Layout>
    );
  }
}
