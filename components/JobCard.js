import React from "react";
import Link from "next/link";
import style from "./styles/jobCard.js";

export default class JobCard extends React.Component {
  render() {
    return (
      <div>
        <h2 className="link">
          <Link href={{ pathname: "/work-ad", query: { id: this.props._id } }}>
            <a>{this.props.title}</a>
          </Link>
        </h2>
        <p>{this.props.subtitle}</p>
        <style jsx>{style}</style>
      </div>
    );
  }
}
