
import React, { Component } from 'react'
import { Form, Col } from "react-bootstrap";
import { genders } from './Genders'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            user_name: "",
            password: "",
            first_name: "",
            last_name: "",
            bio: ""
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
          <form
            onSubmit={e => {
              this.props.handleSignupSubmit(e, this.state);
            }}
          >
            <h3 align="center">Sign up</h3>

            <Form>
              <Form.Row>
                <Col align="center">
                <label className="firstnameLabel">First Name</label>
                  <Form.Control className="customFirst" name="first_name" placeholder="First name" 
                  onChange={(e) => this.handleChange(e)} value={this.state.first_name}/>
                </Col>
                <Col align="center">
                <label className="lastnameLabel">Last Name</label>
                  <Form.Control name="last_name" className="customLast" placeholder="Last name" 
                  onChange={(e) => this.handleChange(e)} value={this.state.last_name}/>
                </Col>
              </Form.Row>
            </Form>
            
            <div className="form-group" align="center">
              <label align="left">Username</label>
              <input
                name="user_name"
                className="form-control"
                placeholder="Enter username"
                onChange={e => this.handleChange(e)}
                value={this.state.user_name}
              />
            </div>

            <div className="form-group" align="center">
              <label>Password</label>
              <input
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => this.handleChange(e)}
                value={this.state.password}
              />
            </div>

            <Form.Group controlId="exampleForm.ControlTextarea1" align="center">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                name="bio"
                className="form-control"
                placeholder="Ex. Writer. Mother. I enjoy reading and baking in my free time."
                onChange={e => this.handleChange(e)}
                value={this.state.bio}
              />
            </Form.Group>

            <div className="form-group" align="center">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary-create-account" align="center">
              Create Account
            </button>
            <p className="forgot-password text-center">
              Already Have an Account?<br></br>
              <a href="/login">Sign In</a>
            </p>
          </form>
        );
    }
}

export default Signup