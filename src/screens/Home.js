import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as f from "firebase";

export default class Home extends Component {
  //lifecycle methods

  state = {
    name: "ali"
  };

  componentDidMount() {
    console.log("I am component did mount");

    //add database
    // f.database()
    //   .ref("users")
    //   .push({
    //     name: "talha",
    //     age: 21
    //   });

    //remove data from database
    // f.database()
    //   .ref("users")
    //   .child("-M3_z46oqOqw36n9bqjd")
    //   .remove();

    //update data from database
    // f.database()
    //   .ref("users")
    //   .child("-M3_zAr3WvHDWSL3JtMf")
    //   .update({
    //     age: 25
    //   });
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
