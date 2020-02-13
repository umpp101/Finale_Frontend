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
      <div class="container">
      <div class="row">
          <div class="col-sm-12 header pt-5">
              <h1>Jhana</h1>

              <form class="pt-5" onSubmit={(e) => {this.props.handleLoginSubmit(e, this.state)}}>
                  <div class="form-group col-sm-6 m-auto d-block pt-3">
                      <label for="formGroupExampleInput" class="bheader">Username</label>
                      <input 
                      name="user_name"
                      onChange={(e) => this.handleChange (e)} value={this.state.user_name}
                      type="text" class="form-control" 
                      id="formGroupExampleInput" 
                      placeholder="Your UserName"/>
                  </div>
                  <div class="form-group col-sm-6 m-auto d-block pt-3">
                      <label for="formGroupExampleInput2" class="bheader">Password</label>
                      <input
                      name="password"
                      onChange={(e) => this.handleChange (e)} value={this.state.password} 
                      type="password" class="form-control" 
                      id="formGroupExampleInput2" 
                      placeholder="●●●●●●●●●"/>
                  </div>

                  <div class="pt-5 text-center">
                      <button type="submit" class="btn-lg btn-warning bheader m-auto d-block">Sign In</button>

                      <div class="text-center pt-3">
                          <a class="bheader" href="/signup">Sign Up</a>
                      </div>
                  </div>

              </form>

          </div>
      </div>
  </div>
      );
    }
  }
  
  export default Login


                