import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import Nav from "./Nav";

class UserStory extends Component {
  constructor(props) {
      super(props);

      this.state = {
        // this is supposed to represent a URL, is this correct?
          user_stories: " ",
      }
  }

export default UserStory;
