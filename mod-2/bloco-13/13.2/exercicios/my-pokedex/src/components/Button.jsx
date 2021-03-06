import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
