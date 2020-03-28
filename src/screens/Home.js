import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  //lifecycle methods

  state = {
    name: "ali"
  };

  componentDidMount() {
    console.log("I am component did mount");
  }

  componentWillUnmount() {
    console.log("i am component un mount");
  }

  componentDidUpdate() {
    console.log("I am updating");
  }

  constructor() {
    super();
    console.log("i am a constructor");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">go to about page</Link>
        <button
          onClick={() => {
            this.setState({
              name: "haider"
            });
          }}
        >
          change
        </button>
      </div>
    );
  }
}
