import * as React from "react";
import { render } from "react-dom";
import { EtapeAideAuChoix, EtapeAideAuChoixQuestion } from "./Grapher";
import { Graph, GraphVertice } from "./graphosorus-rex";
import { graph as g } from "./graph";

const styles = {
  fontFamily: "sans-serif"
};

const vertices: Array<GraphVertice> = g;

console.log("graph", vertices);

const graph: Graph = Graph.buildGraph(vertices, () => {});

const App = () => (
  <div style={styles}>
    foo toto
    <EtapeAideAuChoixQuestion graph={graph} />
    <EtapeAideAuChoix key="t" inputValues={[1, 2, 3, 4]} />
  </div>
);

render(<App />, document.getElementById("root"));
