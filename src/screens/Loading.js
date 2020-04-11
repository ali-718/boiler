import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
