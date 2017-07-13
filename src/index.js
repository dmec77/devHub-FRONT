// Set up your application entry point here...
import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

//Application assets
import "./assets/css/style.css";

//Vendor assets
// import "./vendor/css/bootstrap.css";
// import "./vendor/css/font-awesome.min.css";


// STATE Comp
import Landing from "./components/Landing";
// Landing-PROP Comp
import Login from "./components/Login";
// Landing-PROP Comp
import Signup from "./components/Signup";

import User from "./components/User";
import UserDashboard from "./components/UserDashboard";

import ProjectDashboard from "./components/ProjectDashboard";

import ProjectName from "./components/ProjectName";
import Wireframes from "./components/Wireframes";
import UserStories from "./components/UserStories";
import Erd from "./components/Erd";
import Proposal from "./components/Proposal";
import Issues from "./components/Features";
import bonus from "./components/Bonus";
import Technologies from "./components/Technologies";
import Issues from "./components/Issues";





//Restrict routes to logged in users only
const restrict = () => {
    if (!window.localStorage.getItem("token")) {
        browserHistory.push("/login");
    }
}


// if you put "exact" between Route and Path below, then you are telling the app to only work on the EXACT match (i.e. if /owners/1 ws listed with EXACT, then /owners/2 will not match)
ReactDom.render(
    <Router history={browserHistory}>
       <Route path="/" component={Landing} onEnter={restrict} />
       <Route path="/users/login" component={Login} />
       <Route path="/signup" component={Signup} />
       <Route path="/users" component={User} onEnter={restrict} />
       <Route path="/users/:id/dashboard" component={UserDashboard} onEnter={restrict} />
       <Route path="/users/:id/projectname" component={ProjectName} onEnter={restrict} />
       <Route path="/users/:id/proposal" component={Proposal} onEnter={restrict} />
       <Route path="/users/:id/wireframes" component={Wireframes} onEnter={restrict} />
       <Route path="/users/:id/erd" component={Erd} onEnter={restrict} />
       <Route path="/users/:id/userstories" component={UserStories} onEnter={restrict} />
       <Route path="/users/:id/features" component={Features} onEnter={restrict} />
       <Route path="/users/:id/bonus" component={Bonus} onEnter={restrict} />
       <Route path="/users/:id/technologies" component={Technologies} onEnter={restrict} />
       <Route path="/users/:id/issues" component={Issues} onEnter={restrict} />
   </Router>
, document.getElementById("app"));
