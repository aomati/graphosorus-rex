import {
  GraphVerticeDTO,
  GraphEdgeDTO,
  I18nDTO,
  PropertiesDTO,
  GraphItemChoiceDTO
} from "./dto/models";

/**
 * Represents a graph, in our application, this is a decision tree
 * A graph deal with the adjacency matrix representation of the graph.
 */
export class Graph {
  // reference to the root of the graph
  private root: GraphVertice;
  // reference to the current active vertice (question actually displayed)
  private current: GraphVertice;
  // actual path from the root (reducing the cyclomatic complexity)
  // an empty path means we are at the root
  private currentPath: Array<number> = [];

  /**
   * Default constructor.
   * It takes the graph it has to process in parameter.
   * The gives set of nodes cannot be empty.
   *
   * Take care about the representation of the graph.
   * Here the graph is actually the adjacency matrix where edges have a simple reference (id)
   * to the corresponding node in the array which means that the representation of the graph
   * is flat in this implementation.
   *
   * @param nodes the list of node that are used in the graph.
   */
  constructor(
    private nodes: Array<GraphVertice>,
    private fetch: Function,
    configuration?: any
  ) {
    if (nodes.length === 0) {
      throw new Error("The list of node cannot be empty");
    }
    this.current = this.root = nodes[0];
  }

  /**
   * Walk through the vertice from the current position in the graph.
   * If the edge does not exists, it will raised an exception, otherwise,
   * it will walk to the correct vertice and adjust the internal state of
   * the graph.
   *
   * @param edgeId the id of the egde to go to
   * @returns the isntance of the graph itself
   */
  walk(edgeId: number): Graph {
    const child = this.current.children.filter(edge => edge.id === edgeId);
    if (child.length) {
      // it's always deterministic
      const edgeToUse = child[0];
      this.current = edgeToUse.destination;
      this.currentPath.push(edgeId);
      return this;
    } else {
      throw new Error(
        `Unable to find the edge ${edgeId} from ${this.current.id}`
      );
    }
  }

  /**
   * Go to the previous selection in the path.
   * This process destroy the current position in the graph (no state nor memento
   * for now at least)
   *
   * @param n the number of time
   * @returns the isntance of the graph itself
   */
  goUp(n: number = 1): Graph {
    const parentEdgeId = this.currentPath.pop();
    const parentEdge = this.current.parent.filter(
      edge => edge.id === parentEdgeId
    );
    this.current = parentEdge[0].source;
    if (n !== 0) {
      return this.goUp(n - 1);
    }
    return this;
  }

  /**
   * Get the reference to the current vertex
   *
   * @returns the current vertex.
   */
  getCurrent(): GraphVertice {
    return this.current;
  }

  /**
   * Fetch the edge ID according to his id from the current position.
   * If the edge id exists, the answer is considered as valid, the answer
   * is considered as invalid otherwise.
   *
   * @param selection the id of the edge which has been selected
   * @returns true means the edge exists in the answer list and consequently, the
   * response is considered as valid, otherwise, the response is considered as invalid.
   */
  isValidAnswer(selection: number): boolean {
    return (
      this.current.children.filter(edge => edge.id === selection).length > 0
    );
  }

  /**
   * Return the list of available edges from the current vertice.
   * If the current vertice is null, the array returned will be an
   * empty array.
   *
   * @param lang the expected language for translation
   * @returns a list of edges (qnaswer);
   */
  getAvailableEdges(lang: string = ""): Array<GraphEdge> {
    if (this.current) {
      const children = this.current.children;
      if (lang != "") {
        children.map(c => {
          c.i18n = c.i18n.filter(l => l.lang === lang);
        });
      }
      return children;
    }
    return [];
  }

  /**
   * Check if there is choices defined in the list of nodes
   * 
   @returns true if the current node has some choices, false otherwise
   */
  hasChoice(): boolean {
    return this.current.choices.length > 0;
  }

  /**
   * Fetch the select from the list of choice
   */
  getSelection(): number {
    // TODO(mlefebvre): implement the selection state management
    return 0;
  }

  /**
   * fetch the translation for the requested lang
   *
   * @param lang the lang to fetch information for
   * @returns null if their is no translation for the given lang, the GcKey otherwise
   */
  getTranslation(lang: string): GcKey {
    const list: Array<GcKey> = this.current.i18n.filter(
      k => k.lang.toString() === lang
    );
    if (list.length) {
      return list[0];
    }
    return null;
  }

  /**
   * Fetch the weight of the path from the root to the current node
   * The weight of the path is the weight of each vertice to the node.
   * If their is no vertice to the (which means this is the root), the
   * weight is 0
   *
   * @returns the weight of the path from root to the current position
   */
  getWeightFromRoot(): number {
    return this.getWeight(this.current, this.currentPath);
  }

  /**
   * Submit the state of the graph to the backend
   */
  prepareSubmit(): GraphSelectionRequest {
    return {
      verticeId: this.current.id,
      pathWeight: this.getWeightFromRoot(),
      selection: this.getSelection()
    };
  }

  /**
   * Submit the graph to the backend
   */
  submit(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject("not implemented");
    });
  }

  /**
   * Recursively construct the weight of a node (means the weight of the path
   * from the root to the node) from the node with a specific path.
   *
   * @param node the node to fetch the path's weigh
   * @param path the path in terms of edge id
   * @returns the weight of the path to the root
   */
  private getWeight(node: GraphVertice, path: Array<number>): number {
    if (node === null || node.parent === null || node.parent.length == 0) {
      return 0;
    }
    // the path information gives the list of id for
    // each edges used to walk to the path.
    const parentId = path.pop();
    const parentEdge = node.parent.filter(edge => edge.id === parentId);
    // Note: there is no real validation here, we are expecting the path cannot
    // be altered from outside of the graph. This should be tested / improved
    // to ensure this conjecture is an actual fact.
    return parentEdge[0].weight + this.getWeight(parentEdge[0].source, path);
  }

  /**
   * Build the graph representation to use from the adjacency matrix (AM)
   * The AM provides references to the right item (GraphPart) using his ID.
   * This building process read every node in the provided matrix and replace
   * ids with correct reference.
   *
   * @param nodes the list of nodes fetched from the brackend
   * @returns a reference to a fresh graph
   */
  public static buildGraph(
    nodes: Array<GraphVerticeDTO>,
    fetch: Function,
    configuration?: any
  ): Graph {
    const edges: Array<GraphEdge> = [];
    const vertices: Array<GraphVertice> = [];

    const registry: GraphPartRegistry = new GraphPartRegistry();

    nodes.forEach((node: GraphVerticeDTO) => {
      const vertice: GraphVertice = Graph.transformVerticeDTOtoVertice(node);
      vertices.push(vertice);
      registry.putVertice(vertice);
      node.children.forEach((edgeDTO: GraphEdgeDTO) => {
        const edge: GraphEdge = Graph.transformEdgeDTOtoEdge(edgeDTO);
        edges.push(edge);
        registry.putEdge(edge);
      });
    });
    return new Graph(registry.coerce(nodes), fetch, configuration);
  }

  private static transformPropertiesDTO(
    dtos: Array<PropertiesDTO>
  ): Array<Property> {
    return [];
  }

  private static transformI18nDTO(
    dtos: Array<I18nDTO>,
    parent: GraphPart
  ): Array<GcKey> {
    return dtos.map((dto: I18nDTO) => ({
      id: Number(dto.id),
      lang: dto.lang,
      properties: Graph.transformPropertiesDTO(dto.properties),
      parent
    }));
  }

  private static transformEdgeDTOtoEdge(edgeDTO: GraphEdgeDTO): GraphEdge {
    console.log("transform edge DTO to edge internal representation");
    const { id, weight, i18n } = edgeDTO;
    return {
      id,
      i18n: Graph.transformI18nDTO(i18n, null),
      weight,
      source: null,
      destination: null
    };
  }

  private static transformChoiceDTO(
    choices: Array<GraphItemChoiceDTO>
  ): Array<GraphChoice> {
    return choices.map(c => ({
      id: c.id,
      rank: c.rank,
      value: 1 << c.rank,
      i18n: Graph.transformI18nDTO(c.i18n, null),
      node: null
    }));
  }

  private static transformVerticeDTOtoVertice(
    node: GraphVerticeDTO
  ): GraphVertice {
    console.log("Transform vertice DTO to vertice internal representation");
    const { id, i18n, choices } = node;
    return {
      id,
      automatable: false,
      i18n: Graph.transformI18nDTO(i18n, null),
      parent: [],
      children: [],
      choices: Graph.transformChoiceDTO(choices)
    };
  }
}

/**
 * Registry to store and link all graph elements
 */
class GraphPartRegistry {
  private edges: Map<number, GraphEdge> = new Map();
  private vertices: Map<number, GraphVertice> = new Map();

  constructor() {
    // nothing to do
  }

  private contains(part: GraphPart, type: number): boolean {
    const m: Map<number, GraphPart> = type === 1 ? this.edges : this.vertices;
    return m.has(part.id);
  }

  containsEdge(part: GraphEdge): boolean {
    return this.contains(part, 1);
  }

  containsVertice(part: GraphVertice): boolean {
    return this.contains(part, 2);
  }

  private put(part: GraphPart, type: number): GraphPartRegistry {
    if (this.contains(part, type)) {
      return this;
    }
    const m: Map<number, GraphPart> = type === 1 ? this.edges : this.vertices;
    m.set(part.id, part);
    return this;
  }

  putEdge(part: GraphEdge): GraphPartRegistry {
    return this.put(part, 1);
  }

  putVertice(part: GraphVertice): GraphPartRegistry {
    return this.put(part, 2);
  }

  coerce(vertices: Array<GraphVerticeDTO>): Array<GraphVertice> {
    vertices.forEach((verticeDTO: GraphVerticeDTO) => {
      const vertice: GraphVertice = this.vertices.get(verticeDTO.id);

      vertice.parent = verticeDTO.parents.map((id: number) =>
        this.edges.get(id)
      );

      verticeDTO.children.forEach((child: GraphEdgeDTO, index: number) => {
        // TODO(mlefebvre): ensure that the given child match with the dto child;
        let part: GraphEdge = vertice.children[index];
        part = {
          source: undefined,
          destination: undefined,
          weight: 0,
          id: 0,
          i18n: null
        };
        part.source = this.vertices.get(child.source);
        part.destination = this.vertices.get(child.destination);
      });
    });
    const result: Array<GraphVertice> = [];
    this.vertices.forEach(v => {
      result.push(v);
    });
    return result;
  }

  getVertices(): Array<GraphVertice> {
    const vs: Array<GraphVertice> = [];
    this.vertices.forEach((v, k) => {
      vs.push(v);
    });
    return vs;
  }
}

/**
 *
 */
export interface GraphPart {
  // unique identifier of the node
  id: number;
  // list of translations for the front end
  i18n: Array<GcKey>;
}

/**
 *
 */
export interface GraphSelectionRequest {
  // the unique id of the vertice
  verticeId: number;
  // the weight to the path
  pathWeight: number;
  // the value selected from the list of choice associates to the leaf
  selection: number;
}

/**
 * Represents a node in the tree
 * A node has a list of vertice. The graph is non cyclic
 * and unidirected, which mesans that there is only one
 * vertice to the parent.
 */
export interface GraphVertice extends GraphPart {
  // vertice to the parent (it can be a list but in our case, it is a single element list)
  parent: Array<GraphEdge>;
  // list of edge to children
  children: Array<GraphEdge>;
  // indicates if the node can be cross with a calculation
  // we will add information to be able to automate programatically
  automatable: boolean;
  // list of available choice for the node. It may be empty for
  // all node but leafs.
  // If the leaf has no choice, this is an empty array
  choices: Array<GraphChoice>;
}

/**
 * Represents an edge in the graph.
 */
export interface GraphEdge extends GraphPart {
  // weight of the edge. A weight is unique in our implememntation
  // bu this is a convenient choice.
  weight: number;
  // Node where the edge starts
  source: GraphVertice;
  // node to which the edge goes
  destination: GraphVertice;
}

/**
 * Represent a choice in a node.
 * Mainly used for leaf object, they are representing the list of possible choice
 * for a leaf.
 * The user selection is represented by the sum of all selected values.
 */
export interface GraphChoice {
  // unique id of the choice
  id: number;
  // value associates to the choice.
  value: number;
  // List of translations for the to display nead the choice
  i18n: Array<GcKey>;
  // reference to the parent node of the choiceIt can be an edge or a vertice
  node: GraphPart;
}

/**
 * Represent a translation in a specific lang.
 */
export interface GcKey {
  // unique id of the key
  id: number;
  // The unique iso code 2 of the lang
  lang: string;
  // list of translated properties
  properties: Array<Property>;
  // reference to the owner of the part
  parent: GraphPart;
}

/**
 * Define a property in the context of the translation.
 * The backend define an id for each property. This information is
 * dropped out when the back end send the response to the front end.
 */
export interface Property {
  // The key associates with the property
  key: string;
  // the value associate to the property
  value: string;
}

/**
 * Available lang in the interface
 */
export enum Lang {
  EN = "en",
  DE = "de",
  IT = "it",
  FR = "fr"
}
