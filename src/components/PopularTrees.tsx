import React, { Component } from "react";
import Tree from "./Tree";

type Props = {};

type State = {
  trees: Array<{
    name: string;
    scientificName: string;
  }>;
};
export default class PopularTrees extends Component<Props, State> {
  state: State = {
    trees: [
      { name: "White birch", scientificName: "Betula pendula" },
      { name: "Weeping willow", scientificName: "Salix sepulcralis" },
      { name: "London planetree", scientificName: "Platanus hybryda" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.trees.map(tree => (
          <Tree name={tree.name} scientificName={tree.scientificName} />
        ))}
      </div>
    );
  }
}
