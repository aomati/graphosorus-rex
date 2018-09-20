import * as React from "react";
import { GraphVertice, GraphSelectionRequest, Graph } from "./graphosorus-rex";

export interface IEtapeAideAuChoixQuestionProps {
  graph: Graph;
}

export interface IEtapeAideAuChoixQuestionState {
  graph: Graph;
  selection?: GraphSelectionRequest;
}

export class EtapeAideAuChoixQuestion extends React.Component<
  IEtapeAideAuChoixQuestionProps,
  IEtapeAideAuChoixQuestionState
> {
  constructor(props: IEtapeAideAuChoixQuestionProps) {
    super(props);
    this.state = { graph: props.graph };
  }

  public render() {
    return <div>test2</div>;
  }
}

export interface IEtapeAideAuChoixProps {
  inputValues: number[];
}

export interface IEtapeAideAuChoixState {
  values: boolean[];
}

export class EtapeAideAuChoix extends React.Component<
  IEtapeAideAuChoixProps,
  IEtapeAideAuChoixState
> {
  constructor(props: IEtapeAideAuChoixProps) {
    super(props);
    const initialState = props.inputValues.map(key => false);
    this.state = { values: initialState };
  }

  private handleOnChange: (key: number) => void = key => {
    const nextValue: boolean[] = this.state.values.map(
      (k, i) => (i === key ? !k : k)
    );

    this.setState(
      {
        values: nextValue
      },
      () => {
        console.log("state", this.state);
      }
    );
  };

  public render() {
    return (
      <div>
        <div>toto</div>
        {this.props.inputValues.map(key => {
          return (
            <React.Fragment>
              <input
                type="checkbox"
                value={key}
                key={key}
                onChange={() => this.handleOnChange(key)}
              />
              <span>{`label_${key}`}</span>
              <br />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
