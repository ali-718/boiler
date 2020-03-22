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
    age: 19
  };

  Submit = () => {
    this.setState({
      name: "haider",
      age: 21
    });
  };

  myData = [
    {
      name: "Ali Haider",
      age: 21,
      isComment: false,
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/16/49/genoa-4948029_960_720.jpg"
    },
    {
      name: "Jaffar",
      age: 22,
      isComment: true,
      image:
        "https://cdn.pixabay.com/photo/2017/08/10/05/18/home-2618511_960_720.jpg"
    }
  ];

  render() {
    return (
      <div>
        {/* <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        <SecondDiv name={this.mydetails} />
        
        <p>{this.mydetails.name}</p>
        <Export />
        <SecondExport /> */}
        <p>{this.state.name}</p>
        <p>{this.state.age < 20 ? "You are a teenager" : "No you are not"}</p>

        {this.myData.map(data => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <img src={data.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text">My age is {data.age}</p>

                {data.isComment == true ? (
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}

        <button onClick={this.Submit}>name changer</button>
      </div>
    );
  }
}

export default App;
