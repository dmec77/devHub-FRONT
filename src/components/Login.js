import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";

import Nav from "./Nav";

class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email: "",
          password: ""
      }
  }

  handleSubmit(event) {
      event.preventDefault();

      axios
      .post("/localhost:8000", {
          user: this.state
      })
      .then((response) => {
          const token = response.data.token;

          window.localStorage.setItem("token", token);

//  WHICH ONE CORRECT?????
          browserHistory.push("/users/:id/dashboard");
          // browserHistory.push(`/users/${this.props.params.id}/dashboard`);
          response.user
      })
      .catch((err) => {
          console.log(err);
      });
  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      });
  }

  render() {
      return (
          <div>

            <Nav />

              <div className="small-container well">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                      <h2>Login</h2>

                      <div className="margin-top-20">
                          <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" placeholder="Email Address" />
                      </div>

                      <div className="margin-top-20">
                          <input onChange={this.handleChange.bind(this)} name="password" type="password" className="form-control" placeholder="Password" />
                      </div>

                      <div className="margin-top-20">
                          <button type="submit" className="btn btn-primary">Login</button>
                      </div>

                      <div className="margin-top-10">
                          <Link to="/signup">Create an account</Link>
                      </div>
                  </form>
              </div>

      );
  }
}

export default Login;
