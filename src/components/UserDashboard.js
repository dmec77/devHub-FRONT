import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "react-axios";

import Nav from "./Nav";


class UserDashboard extends Component {
  constructor(props) {
      super(props);

      this.state = {
          first: " ",
          last: " ",
          email: " ",
          project_name: " "

      };
  }

    componentDidMount() {
      axios
      .get("https:localhost:8000", {
          headers: {
              "Authorization": window.localStorage.getItem("token")
          }
      })

      .then((response) => {
      const usersData = response.data;

        this.setState({
          users: usersData
        });
    })

      .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
        <div>
          SOME DATA GOES HERE
        </div>

    );
  }
}
export default UserDashboard;
