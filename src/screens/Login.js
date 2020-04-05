import React, { Component } from "react";
import * as f from "firebase";

export default class Login extends Component {
  state = {
    Email: "",
    Password: "",
    isError: false,
  };

  componentDidMount() {
    f.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.history.push("/");
        return 0;
      }
    });
  }

  Login = () => {
    f.auth()
      .signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((e) => {
        // alert("Wrong email or password");
        this.setState({ isError: true });
      });
  };

  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={this.state.Email}
            onChange={(val) => this.setState({ Email: val.target.value })}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={this.state.Password}
            onChange={(val) => this.setState({ Password: val.target.value })}
          />
        </div>
        {this.state.isError ? (
          <div class="alert alert-danger" role="alert">
            Wrong Email or Password
          </div>
        ) : null}
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={this.Login} type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}
