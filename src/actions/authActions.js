import * as f from "firebase";

export const changeName = () => (dispatch) => {
  dispatch({ type: "CHANGE_NAME" });
};

export const UserLogin = (history, Email, Password) => (dispatch) => {
  f.auth()
    .signInWithEmailAndPassword(Email, Password)
    .then((res) => {
      f.database()
        .ref("users")
        .child(res.user.uid)
        .once("value")
        .then((res) => {
          dispatch({ type: "USER_LOGIN", payload: res.val() });
          console.log(res.val());
        })
        .then(() => {
          history.push("/");
        });
    })
    .catch((e) => {
      // alert("Wrong email or password");
      this.setState({ isError: true });
    });
};

export const SaveUser = (user) => (dispatch) => {
  dispatch({ type: "SAVE_USER", payload: user });
};
