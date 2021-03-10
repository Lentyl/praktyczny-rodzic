import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

class Login extends React.Component {
  state = {
    loginSt: "",
    passwordSt: "",
    loginPermission: false,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        loginSt: e.target.value,
      });
    } else if (e.target.type === "password") {
      this.setState({
        passwordSt: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { passwordSt, loginSt } = this.state;

    axios
      .post(`/login`, {
        permission: {
          passwordSt,
          loginSt,
        },
      })
      .then((res) => {
        const loginPermission = res.data.permission;

        if (loginPermission) {
          Cookies.set("user", "loginTrue", { path: "/admin" }, { expires: 1 });
          this.props.handleLoggedStatus(loginPermission);
          this.setState({
            loginPermission,
          });
        } else {
          const login = "";
          const password = "";

          this.setState({
            passwordSt: password,
            loginSt: login,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.loginPermission) {
      return <Route render={() => <Redirect to="/admin" />} />;
    } else {
      return (
        <div className="login-page">
          <form
            className="login-page__login-container"
            onSubmit={this.handleSubmit}
          >
            <input
              className="login-page__login"
              type="text"
              placeholder="Login"
              onChange={this.handleChange}
              value={this.state.loginSt}
            ></input>
            <input
              className="login-page__password"
              type="password"
              placeholder="hasło"
              onChange={this.handleChange}
              value={this.state.passwordSt}
            ></input>
            <button className="login-page__submit-button">zatwierdź</button>
          </form>
        </div>
      );
    }
  }
}
export default Login;
