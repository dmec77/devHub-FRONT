import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";

import Nav from "./Nav";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .post("http://pet-manager-api.herokuapp.com/users", {
            user: this.state
        })
        .then((user) => {
            console.log(user);
            browserHistory.push("/login");
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
                        <h2>Create Account</h2>

                        <div className="margin-top-20">
                            <input onChange={this.handleChange.bind(this)} name="first_name" type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="margin-top-20">
                            <input onChange={this.handleChange.bind(this)} name="last_name" type="text" className="form-control" placeholder="Last Name" />
                        </div>

                        <div className="margin-top-20">
                            <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" placeholder="Email Address" />
                        </div>

                        <div className="margin-top-20">
                            <input onChange={this.handleChange.bind(this)} name="password" type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="margin-top-20">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>

                        <div className="margin-top-10">
                            <Link to="/login">Already have an account? Log in</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
