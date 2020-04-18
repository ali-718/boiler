import React, { Component } from "react";
import * as f from "firebase";
import Loading from "./Loading";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    Email: "",
    Password: "",
    isError: false,
    isLoading: false,
    Age: "",
    Company: "",
    Name: "",
  };

  //   componentDidMount() {
  //     f.auth().onAuthStateChanged((user) => {
  //       console.log(user);
  //       if (user) {
  //         this.props.history.push("/");
  //         return 0;
  //       } else {
  //         this.setState({
  //           isLoading: false,
  //         });
  //       }
  //     });
  //   }

  Login = () => {
    f.auth()
      .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .then((res) => {
        console.log(res);
        f.database()
          .ref("users")
          .child(res.user.uid)
          .set({
            Name: this.state.Name,
            Age: this.state.Age,
            Password: this.state.Password,
            Company: this.state.Company,
            id: res.user.uid,
          })
          .then(() => {
            this.props.history.push("/login");
          });
      })
      .catch((e) => {
        // alert("Wrong email or password");
        this.setState({ isError: true });
      });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.Name}
                onChange={(val) => this.setState({ Name: val.target.value })}
              />
            </div>
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
                onChange={(val) =>
                  this.setState({ Password: val.target.value })
                }
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Age</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={this.state.Age}
                onChange={(val) => this.setState({ Age: val.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Company</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                value={this.state.Company}
                onChange={(val) => this.setState({ Company: val.target.value })}
              />
            </div>

            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button onClick={this.Login} type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.ali,
});

export default connect(mapStateToProps)(Login);
