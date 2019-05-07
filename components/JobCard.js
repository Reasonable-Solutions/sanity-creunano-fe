import React from "react";
import Link from "next/link";
import style from "./styles/jobCard.js";

export default class JobCard extends React.Component {
  render() {
    return (
      <div className="content">
        <Link href={{ pathname: "/work-ad", query: { id: this.props._id } }}>
          <a>
            <h2 className="link">{this.props.title}</h2>
          </a>
        </Link>
        <p>{this.props.subtitle}</p>

        <style jsx>{style}</style>
      </div>
    );
  }
}
