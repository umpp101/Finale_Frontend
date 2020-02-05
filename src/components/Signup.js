
import React, { Component } from 'react'
import { Form, Col } from "react-bootstrap";


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
            <div className="signupPage">
          <form
            onSubmit={e => {
              this.props.handleSignupSubmit(e, this.state);
            }}
          >
            <h1 className="login-logo">Jhana</h1>
            <div className="form-group" align="center">
              <label align="left">First Name</label>
              <input
                name="first_name"
                className="form-control"
                placeholder="Enter first name"
                onChange={e => this.handleChange(e)}
                value={this.state.first_name}
              />
            </div>

            <div className="form-group" align="center">
              <label align="left">Last Name</label>
              <input
                name="last_name"
                className="form-control"
                placeholder="Enter last name"
                onChange={e => this.handleChange(e)}
                value={this.state.last_name}
              />
            </div>

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
        </div>
        );
    }
}

export default Signup