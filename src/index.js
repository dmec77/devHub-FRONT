// Set up your application entry point here...
import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

//Application assets
import "./assets/css/style.css";

//Vendor assets
import "./vendor/css/bootstrap.css";
import "./vendor/css/font-awesome.min.css";

import User from "./components/User";
// import NewOwner from "./components/NewOwner";
// import NewPet from "./components/NewPet";
// import EditOwner from "./components/EditOwner";
// import EditPet from "./components/EditPet";
import Login from "./components/Login";
import Signup from "./components/Signup";

//Restrict routes to logged in users only
const restrict = () => {
    if (!window.localStorage.getItem("token")) {
        browserHistory.push("/login");
    }
}


// if you put "exact" between Route and Path below, then you are telling the app to only work on the EXACT match (i.e. if /owners/1 ws listed with EXACT, then /owners/2 will not match)
ReactDom.render(
    <Router history={browserHistory}>
//         <Route path="/" component={User} onEnter={restrict} />
//         <Route path="/owners/new" component={NewOwner} onEnter={restrict} />
//         <Route path="/owners/:owner_id/pets/new" component={NewPet} onEnter={restrict} />
//         <Route path="/owners/:id/edit" component={EditOwner} onEnter={restrict} />
//         <Route path="/owners/:owner_id/pets/:id/edit" component={EditPet} onEnter={restrict} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
//     </Router>
, document.getElementById("app"));
