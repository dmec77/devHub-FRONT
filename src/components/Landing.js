import React, {Component} from "react";
import { Link } from "react-router";
import "../assets/css/style.css";

class Landing extends Component {

  constructor(props) {
    super(props);
    }

    render() {
      return (
          <div id="landing-title-only-here">
              <Link to="/users/login" id="log-in">Log In</Link>

              <Link to="/signup" id="sign-up">Sign Up</Link>

              <span id="title">

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

              <h1>Everything you need, All in one place</h1>


              <h3>Web Developers Project Tracker</h3>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>

        );
    }

}




export default Landing;
