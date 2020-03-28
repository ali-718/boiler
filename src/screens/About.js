import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        {console.log(this.props)}
      </div>
    );
  }
}
