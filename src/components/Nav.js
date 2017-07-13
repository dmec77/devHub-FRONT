//Step 1: Create component boilerplate
//Step 2: Place nav HTML into the component JSX
//Step 3: Insert Nav component into Dashboard component

import React, { Component } from "react";

// import LoggedInNav from "./LoggedInNav";
// import GuestNav from "./GuestNav";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (window.localStorage.getItem("token")) {
            return (
                <UserDashboard />
            );
        } 
    }
}

export default Nav;
