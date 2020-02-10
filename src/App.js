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
      allPosts: [],
      allComments: [],
      currentUserPosts: [],
      loading: true,
      currentPage: 1
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
    console.log(postData)
    if (!!postData.error === true) return null
    //  we go thru the post data keys and check if the error key is present,
    //  if so... we give them an error messages about username/password being invalid.
    localStorage.setItem("token", postData.jwt);
    await this.setState({
      currentUser: {
        id: Number(postData.user.data.id),
        ...postData.user.data.attributes
        // i did this to grab and auto populate the rest of the attributes from my User
      }
    })
    await this.fetchPosts()
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
  fetchPosts = async () => {
    const response = await fetch("http://localhost:3000/posts")
    const apiData = await response.json();
    console.log(apiData.posts)
    this.setState({
      allPosts: apiData.posts,
      loading: false
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
          id: Number(postData.user.data.id),
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
    console.log(postForm)
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
      allPosts: [...this.state.allPosts, { ...postData.post }]
    })
    if (componentName === PostShow) {
      console.log('this.')
      this.props.history.push('/homepage')
    }

  }

  handleNewCommentSubmit = async (commentForm) => {
    console.log(commentForm)
    // e.preventDefault();
    const fetchUrl = "http://localhost:3000/comments";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        comment: {
          body: commentForm,
          user_id: this.state.currentUser.id,
          post_id: this.state.currentPost.id,
        }
      })
    };
    const response = await fetch(fetchUrl, settings);
    const postData = await response.json();
    console.log(postData)
    // if (!!postData.error === true) return null 
    // console.log(postData.error)
    let posts = this.state.allPosts.map(post => {
      if (post.id === this.state.currentPost.id) {
        post.comments = [...post.comments, postData.comment]
        return post
      } else {
        return post
      }
    });
    let newPost = {...this.state.currentPost}
    newPost.comments = [...newPost.comments, postData.comment]

    await this.setState({
      allPosts: posts,
      currentPost: newPost
    })
    this.props.history.push('/homepage')
  }





  renderSpecificPost = (post) => {
    this.setState({
      currentPost: post
    }, () => this.props.history.push('/postShow'))

  }

  fetchMorePosts = (direction) => {
    let pageNum = direction === 'prev' ? this.state.currentPage - 1 : this.state.currentPage + 1
    const url = ("http://localhost:3000/posts/?page=" + (pageNum))
    fetch(url).then(res => res.json()).then((json) => {
      this.setState({
        allPosts: json.posts,
        loading: false,
        currentPage: pageNum
      })
    })
  }

  // fetchMorePosts = async() => {
  //   const response = await fetch("http://localhost:3000/posts/?page=" + (this.state.currentPage + 1))
  //   //we add the "page Number" URL param because rails needs it to return the posts according to the page
  //   const apiData = await response.json();
  //   console.log(apiData.posts)
  //   this.setState({
  //     allPosts: apiData.posts,
  //     loading: false
  // })
  // }

  componentDidMount() {
    if (localStorage.getItem("token") !== null) {

      fetch("http://localhost:3000/reAuth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          'Authorization': localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            currentUser: {
              id: Number(data.user.data.id),
              ...data.user.data.attributes
            }
          })
        })
        .then(() => this.fetchPosts())
    }
  }



  render() {
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
              newComment={this.handleNewCommentSubmit}
              handleLogout={this.handleLogout} />}
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
              handleLogout={this.handleLogout}
              fetchMore={this.fetchMorePosts}
            />}
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
                  renderSpecificPost={this.renderSpecificPost} />}
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
