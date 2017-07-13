import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import Nav from "./Nav";

// Access this when you click create on User Dash
class ProjectDashboard extends Component {
  constructor(props) {
      super(props);

      this.state = {
          project_name: " ",
          proposal: " ",
          user_stories: " ",
          wireframes: " ",
          erd: " ",
          technologies: " ",
          features: " ",
          bonus: " ",
          issues: " "
    }
  }
}
export default ProjectDashboard;
