import React, { Component } from "react";
import SecondDiv from "./secondDiv";
import { Export, SecondExport } from "./ExportPractice";

class App extends Component {
  // myname = "I am ali";

  // mydetails = {
  //   name: "ali",
  //   age: 21
  // };

  state = {
    name: "ali",
    age: 20
  };

  Submit = () => {
    this.setState({
      name: "haider",
      age: 21
    });
  };

  myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  render() {
    return (
      <div>
        {/* <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        <SecondDiv name={this.mydetails} />
        
        <p>{this.mydetails.name}</p>
        <Export />
        <SecondExport /> */}
        <p>{this.state.name}</p>
        <p>{this.state.age == 20 ? "You are a teenager" : "No you are not"}</p>
        <button onClick={this.Submit}>name changer</button>
        {this.myData.map(item => {
          return <p style={{ margin: 10 }}>{item}</p>;
        })}
      </div>
    );
  }
}

export default App;
