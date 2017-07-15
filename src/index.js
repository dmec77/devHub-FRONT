// Set up your application entry point here...
import React from "react";
import ReactDom from "react-dom";
import { Route, Router, browserHistory } from "react-router";

//Application assets
import "./assets/css/style.css";
import "./assets/js/app.js";
// import "./assets/img/style.css";

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
       <Route path="/users/:id/userdashboard" component={UserDashboard} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard" component={UserDashboard} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/projectname" component={ProjectName} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/proposal" component={Proposal} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/wireframes" component={Wireframes} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/erd" component={Erd} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/userstories" component={UserStories} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/features" component={Features} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/bonus" component={Bonus} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/technologies" component={Technologies} onEnter={restrict} />
       <Route path="/users/:id/projectdashboard/issues" component={Issues} onEnter={restrict} />
   </Router>
, document.getElementById("app"));
