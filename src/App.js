import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
// import Navbar from './components/Navbar'
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import PostShow from "./components/PostShow";
import Modal from "./components/Modal";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";
import Community from "./components/Community";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      currentPost: {},
      allUsers: [],
      allPosts:[],
      currentUserPosts: [],
      loading: true
      // #this will check the current fetches, set to true, due to the fetches being done below
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
  //  we go thru the post data keys and check if the error key is present,
  //  if so... we give them an error messages about username/password being invalid.
      localStorage.setItem("token", postData.jwt);
      this.setState({
      currentUser: {
        id: postData.user.data.id,
        ...postData.user.data.attributes
        // i did this to grab and auto populate the rest of the attributes from my User
      }
    },
      () => this.fetchPosts(),
      // () => this.fetchCurrentUserPosts(),
    )
    // } 
    this.props.history.push("/homepage")
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
    this.setState({
      currentUser: {}
    });
  };
  
  // ***********************************************************************************

  // fetchUsers = async() => {
  //   const response = await fetch("http://localhost:3000/users")
  //   const apiData = await response.json();
  //   this.setState({
  //     allUsers: apiData.users
  // })
  // }
  fetchPosts = async() => {
    const response = await fetch("http://localhost:3000/posts")
    const apiData = await response.json();
    this.setState({
      allPosts: apiData.posts
  })
  }
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
// ***********************************************************
  handleNewPostSubmit = async (postForm, componentName) => {
    // event.preventDefault();
    const fetchUrl = "http://localhost:3000/posts";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        post: {
          title: postForm.title,
          body: postForm.body,
          user_id: 2,
          category_id: 1,
        }
      })
    };
    const response = await fetch(fetchUrl, settings);
    const postData = await response.json();
    console.log(postData)
    if (!!postData.error === true) return null 
    console.log(postData.error)
    await this.setState({
      allPosts: [...this.state.allPosts, {...postData.post} ]
    })
    if (componentName === PostShow) {
      console.log('this.')
      this.props.history.push('/homepage')
    }

  }


  renderSpecificPost = (post) => {
    this.setState({
      currentPost: post
    }, () => this.props.history.push('/postShow') )
    
}




  render() {
    console.log(this.props.history)
    return (
      <div>
          <Switch>
            {/* # Im allowing these pages: (welcome, login and signup) to be accessed whether logged in or not */}
            <Route
              exact
              path="/postShow"
              render={props => <PostShow {...props} 
              currentUser={this.state.currentUser} 
              currentPost={this.state.currentPost}
              newPost={this.handleNewPostSubmit}
              handleLogout={this.handleLogout}/>}
            />
            <Route
              exact
              path="/"
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
              path="/homepage"
              render={props => <Homepage {...props} 
              currentUser={this.state.currentUser} 
              newPost={this.handleNewPostSubmit} 
              allPosts={this.state.allPosts}
              renderSpecificPost={this.renderSpecificPost}
              handleLogout={this.handleLogout}/>}
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
              <>
              <Route
                exact
                path="/community"
                render={props => <Community {...props} />}
              />
               <Route
              exact
              path="/homepage"
              render={props => <Homepage {...props} 
              currentUser={this.state.currentUser} 
              newPost={this.handleNewPostSubmit} 
              allPosts={this.state.allPosts}
              renderSpecificPost={this.renderSpecificPost}/>}
              />
              </>
            ) : (
              <Redirect from="/welcome"
              to="/login" />
            )}
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);

// in order to get history, to push, i added withRouter as an import and then i also added it in index.js
// i then wrap app at the last row by the export with withRouter too!
