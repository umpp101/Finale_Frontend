import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      password: ""
    };
  }
 
  handleChange = (e) => {
      console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div class="logincontainer">
      <div class="Formlife" align="center">

        <img src="https://creai-grand-est.fr/bundles/admin/images/user-empty-avatar.png"/>
        <Form onSubmit={(e) => {this.props.handleLoginSubmit(e, this.state) }}>
                    <h2>Login</h2>
        <Form.Group controlId="formBasic">
          <Form.Control type='text' name="user_name" placeholder="Username" onChange={(e) => this.handleChange (e)} value={this.state.user_name}/>
        
        </Form.Group>
        <br></br> 
      
        <Form.Group controlId="formBasic">
          <Form.Control type='password' name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
        </Form.Group>
        <br></br>
        <Button variant="primary-submit" type="submit">
          Sign Up
        </Button>
      <br></br><br></br>
      <u>Sign Up</u>
      </Form>
      </div>
      </div>
    );
  }
}