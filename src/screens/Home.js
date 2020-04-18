import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as f from "firebase";
import Loading from "./Loading";
import { connect } from "react-redux";
import { changeName, SaveUser } from "../actions/authActions";

class Home extends Component {
  //lifecycle methods

  state = {
    name: "ali",
    data: [],
    isLoading: true,
    isEdit: false,
    Name: "",
    Age: "",
    Id: "",
    user: {},
  };

  constructor(props) {
    super(props);
    // f.auth().signOut();
    f.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user == null) {
        props.history.push("/login");
        return 0;
      }
      f.database()
        .ref("users")
        .child(user.uid)
        .once("value")
        .then((res) => {
          this.props.SaveUser(res.val());
        });
    });

    console.log("I am component did mount");

    // f.auth().createUserWithEmailAndPassword("test@test.com", "123456");
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
    this.fetchData();
  }

  fetchData = () => {
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
  };
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

  // componentDidUpdate() {
  //   console.log("I am updating");
  // }

  // constructor() {
  //   super();
  //   console.log("i am a constructor");
  // }

  componentWillReceiveProps(props) {
    if (props.auth.user) {
      this.setState({
        user: props.auth.user,
      });
    }
  }

  EditForm = (item) => {
    //this will only get data from list to edit form
    this.setState({
      isEdit: true,
      Name: item.name,
      Age: item.age,
      Id: item.id,
    });
    console.log(item);
  };

  UpdateForm = () => {
    // this will update the data to database

    f.database()
      .ref("users")
      .child(this.state.Id)
      .update({
        name: this.state.Name,
        age: this.state.Age,
      })
      .then(() => {
        this.setState({ data: [] });
      })
      .then(() => {
        this.fetchData();
        this.setState({
          isEdit: false,
        });
      });
  };

  DeleteForm = (id) => {
    f.database()
      .ref("users")
      .child(id)
      .remove()
      .then(() => {
        this.setState({ data: [] });
      })
      .then(() => {
        this.fetchData();
        this.setState({
          isEdit: false,
        });
      });
  };

  Logout = () => {
    f.auth()
      .signOut()
      .then(() => {
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div>
        {this.state.isLoading == true ? (
          <Loading />
        ) : (
          <div>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <h3>Name: {this.state.user.Name}</h3>
            </div>
            <button
              onClick={() => this.Logout()}
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: 20 }}
            >
              Logout
            </button>
            {this.state.isEdit ? (
              <div className="container">
                <div class="form-group container">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    onChange={(val) =>
                      this.setState({
                        Name: val.target.value,
                      })
                    }
                    value={this.state.Name}
                    type="text"
                    className="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="form-group container">
                  <label for="exampleInputEmail1">Age</label>
                  <input
                    onChange={(val) =>
                      this.setState({
                        Age: val.target.value,
                      })
                    }
                    value={this.state.Age}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="container">
                  <button
                    onClick={this.UpdateForm}
                    type="button"
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : null}
            <h1>{this.props.auth.name}</h1>
            <button
              onClick={() => this.props.changeName()}
              type="button"
              className="btn btn-primary"
            >
              Changer
            </button>
            {this.state.data.map((item) => (
              <div key={item.id} style={{ marginTop: 30 }}>
                <h3>id: {item.id}</h3>
                <h3>Name: {item.name}</h3>
                <h3>age: {item.age}</h3>
                <div>
                  <button
                    onClick={() => this.EditForm(item)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => this.DeleteForm(item.id)}
                    type="button"
                    className="btn btn-danger"
                    style={{ marginLeft: 20 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.ali,
});

export default connect(mapStateToProps, { changeName, SaveUser })(Home);
