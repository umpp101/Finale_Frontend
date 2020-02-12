import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Login extends Component {
    constructor() {
    super();
    this.state = {
      user_name: "",
      password: ""
    };
  }
//  ********************************************************************************************************* 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
//  ********************************************************************************************************* 

  render() {
    return (
     
      <div className="loginPage">
        <form onSubmit={(e) => {this.props.handleLoginSubmit(e, this.state)}}>
            <h1 className="login-logo">Jhana</h1>
             
  
            <div className="form-group" align="center">
                <label>Username</label>
                  <input name="user_name" className="form-control" placeholder="Enter username" 
                       onChange={(e) => this.handleChange (e)} value={this.state.user_name}/>
            </div>

            <div className="form-group" align="center">
                <label>Password</label>
                  <input name="password" className="form-control" placeholder="Enter password" 
                       onChange={(e) => this.handleChange (e)} value={this.state.password}/>
            </div>

            <div className="form-group" align="center">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary-login">Sign In</button>
            <p className="forgot-password text-center">
                <a href="/signup">Sign Up</a>
            </p>
        </form>
        </div>
        
    );
  }
}

export default Login
