import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }
 
  handleChange = (e) => {
    //   console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div class="logincontainer">
        <div class="Formlife" align="center">
        <Form onSubmit={(e) => {this.props.handleSignupSubmit(e, this.state) }}>
                    <h2>Create your account</h2>
      <div class="signupstuff">
        <Form.Group controlId="formBasicFirstName">
          <Form.Control type='text' name="first_name" placeholder="First Name" onChange={(e) => this.handleChange (e)} value={this.state.first_name}/>
        
        </Form.Group>
  
        <br/>
        <Form.Group controlId="formBasicLastName">
          <Form.Control type='text' name="last_name" placeholder="Last Name" onChange={(e) => this.handleChange (e)} value={this.state.last_name}/>
        
        </Form.Group>
        </div>
    <br/>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type='text' name="username" placeholder="Email" onChange={(e) => this.handleChange (e)} value={this.state.email}/>
        
        </Form.Group>
        <br></br>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Control type='password' name="password" placeholder="Password *" onChange={(e) => this.handleChange(e)} value={this.state.password}/>
        </Form.Group>
        <br/>

        <Button variant="primary-submit" type="submit">
          Create Account
        </Button>
      </Form>
      </div>
      </div>
    )
  }}