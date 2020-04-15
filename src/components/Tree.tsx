import React, { Component } from "react";

type Props = {
  name: string;
  scientificName: string;
};

export default class Tree extends Component<Props> {
  render() {
    return (
      <p>
        Name: {this.props.name} | Scientific Name: {this.props.scientificName}
      </p>
    );
  }
}
