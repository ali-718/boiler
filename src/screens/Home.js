import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as f from "firebase";

export default class Home extends Component {
  //lifecycle methods

  state = {
    name: "ali",
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log("I am component did mount");

    // adding data to database
    // f.database().ref("users").push({
    //   name: "ali",
    //   age: 21,
    // });

    // updating database
    // f.database().ref("users").child("-M43jM3RK4ki8KfyHnHU").update({
    //   age: 22,
    // });

    // remove database
    // f.database().ref("users").child("-M43jM3RK4ki8KfyHnHU").remove();

    f.database()
      .ref("users")
      .once("value")
      .then((res) => {
        res.forEach((snapShot) => {
          console.log({ ...snapShot.val(), id: snapShot.key });

          this.setState({
            data: [...this.state.data, { ...snapShot.val(), id: snapShot.key }],
          });
        });
      })
      .then(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  // ar = [1, 2, 3, 4, 5];
  // ar2 = [6, 7, 8, 9, 10];
  // result = [...ar, ...ar2];

  // output = [
  //  1, 2, 3, 4, 5,
  //   6, 7, 8, 9, 10
  // ];

  // expexted = [1,2,3,4,5,6,7,8,9,10]

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
        {this.state.isLoading == true ? (
          <h1>loading</h1>
        ) : (
          <div>
            {this.state.data.map((item) => (
              <div key={item.id} style={{ marginTop: 30 }}>
                <h3>id: {item.id}</h3>
                <h3>Name: {item.name}</h3>
                <h3>age: {item.age}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
