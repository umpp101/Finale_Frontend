import React, { Component } from "react";
import logo from "./logo.svg";
// import Navbar from './components/Navbar'
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Route,
  Link,
  BrowserRouter as Router,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      allUsers: [],
      currentUserPosts: []
    };
  }

  // ***********************************************************************************
  handleLoginSubmit = async (event, loginState) => {
    event.preventDefault();
    console.log(loginState);
    const fetchUrl = "http://localhost:3000/login";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        auth: {
          // this is the strong params required in my auth controller, to hit my auth #create
          user_name: loginState.user_name,
          password: loginState.password
        }
      })
    };
    const response = await fetch(fetchUrl, settings);
    const postData = await response.json();
      if (!!postData.error === true) return null 
      console.log(postData.error)
  //  we go thru the post data keys and check if the error key is present,
  //  if so... we give them an error messages about username/password being invalid.
      localStorage.setItem("token", postData.jwt);
      console.log(postData)
      this.setState(
        {
          currentUser: {
            id: postData.user.data.id,
            ...postData.user.data.attributes
            // i did this to grab and auto populate the rest of the attributes from my User
          }
        },
        // () => this.fetchUsers(),
        // () => this.fetchCurrentUserPosts(),
        () => this.props.history.push("/homepage")
      );
    // }
  };
  // ***********************************************************************************

  // fetchUsers = async() => {
  //   const response = await fetch("http://localhost:3000/users")
  //   const apiData = await response.json();
  //   this.setState({
  //     allUsers: apiData.users
  // })
  // }

  // fetchCurrentUserPosts = async() => {
  //   const response = await fetch(`http://localhost:3000/users/${this.state.currentUser.id}/posts`)
  //   const apiData = await response.json();
  //   console.log(apiData.posts)
  //   this.setState({
  //     currentUserPosts: {...apiData.posts}
  //   })
  //   }

  // ***********************************************************************************

  handleSignupSubmit = async (event, SignupState) => {
    event.preventDefault();
    const fetchUrl = "http://localhost:3000/signup";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: SignupState
      })
    };
    const response = await fetch(fetchUrl, settings);
    const postData = await response.json();
    if (!!postData.error === true) return null 
      console.log(postData.error)
    localStorage.setItem("token", postData.jwt);
    this.setState(
      {
        currentUser: {
          id: postData.user.data.id,
          ...postData.user.data.attributes
        }
      },
      // () => this.fetchUsers(),
      // () => this.fetchCurrentUserPosts(),
      () => this.props.history.push("/homepage")
    );
  };


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/welcome">WelcomePage</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/homepage">Homepage</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* # Im allowing these pages: (welcome, login and signup) to be accessed whether logged in or not */}
            <Route
              exact
              path="/welcome"
              render={props => <Welcome {...props} />}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} handleLoginSubmit={this.handleLoginSubmit} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  handleSignupSubmit={this.handleSignupSubmit}
                />
              )}
            />{" "}
            )}/>
            {/* this logic checks if the keys in the object of current user has any value or not, if it does then that means.. */}
            {/* someone is logged in and can access the homepage if not i then redirect them to login page! */}
            {Object.keys(this.state.currentUser).length !== 0 ? (
              <Route
                exact
                path="/homepage"
                render={props => <Homepage {...props} />}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);

// in order to get history, to push, i added withRouter as an import and then i also added it in index.js
// i then wrap app at the last row by the export with withRouter too!
