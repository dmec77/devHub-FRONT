import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
// import axios from "axios";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import Nav from "./Nav";


constructor(props) {
  super(props);
  this.state = {

      technologies: ''
};


handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}


render() {
    return (
        <form action="#" id="js-form"

         onSubmit={this.handleSubmit}>

            <div class="message">
              <label for="textarea">Technologies used:</label>
              <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>

              <input type="text" value={this.state.value} onChange={this.handleChange} />


              <input type="submit" value="Submit" />
            </div>
        </form>

      );
    }
  }

  export default Technology;
                  //Possibility - Drop Down with choices
                  // <div class="dropdown">
                  //   <label for="select-choice">Select Dropdown Choice:</label>
                  //   <select name="select-choice" id="select-choice">
                  //     <option value="Choice 1">Choice 1</option>
                  //     <option value="Choice 2">Choice 2</option>
                  //     <option value="Choice 3">Choice 3</option>
                  //   </select>
                  // </div>
//
//     );
//   }
// }
//
// export default Technology;
