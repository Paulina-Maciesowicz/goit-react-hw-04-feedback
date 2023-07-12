import React from 'react';
import { Component } from 'react';

export class List extends Component {

  static defaultProps = {
    contents: [],
  };

  static propTypes = {
    contents: Array,
  };

  list = this.props.contents;

  render() {
    return (
      <>
        <ul>
          {this.list.map((elementListy, indeks) => (
            <li key={indeks}>
              <button onClick={this.state.elementListy}>{elementListy}</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
