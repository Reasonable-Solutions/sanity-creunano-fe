import React from "react";
import Link from "next/link";

export default class JobCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}
