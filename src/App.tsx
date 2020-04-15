import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from "./components/Tree";

function App() {
  const trees = [
    { name: "White birch", scientificName: "Betula pendula" },
    { name: "Weeping willow", scientificName: "Salix sepulcralis" },
    { name: "London planetree", scientificName: "Platanus hybryda" }
  ];
  return (
    <div className="App">
      {trees.map(tree => (
        <Tree name={tree.name} scientificName={tree.scientificName} />
      ))}
    </div>
  );
}

export default App;
