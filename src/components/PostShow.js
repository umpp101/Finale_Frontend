import React, { Component } from 'react'
import { Card, Navbar, Nav, Modal, Form} from "react-bootstrap";

export class PostShow extends Component {

    constructor() {
        super()
    
        this.state = {
             currentPost: {},
             modal: false,
             title: "",
             body: "",
             view_count: 11,
             user_id: 3,
             category_id: 2,
            commentBody: "",
            // commentUser_id: this.props.currentUser.id,
            // CommentPost_id: this.props.currentPost.id
        
        }
    }
    
    handleChange = (e) => {
        // console.log(e.target.value)
     this.setState({
       [e.target.name]: e.target.value
     })
   }
 
   handleEnter = (e) =>{
       if (e.key === "Enter"){
        this.props.newComment(this.state.commentBody)
       }
   }
   

    modalClose() {
        this.setState({
          title: "",
          body: "",
          modal: false
        });
      }
    
    modalOpen() {
        this.setState({ 
            modal: true 
        });
      }

      renderComments = () => {
        if (this.props.currentPost.comments) {
            const result = this.props.currentPost.comments.map(comment => {
                return (
                    // {<img src={this.img}>}
                      <Card className="commentCards">
                          <Card.Title className="card-title1"> Admin </Card.Title>
                          <Card.Body>
                              {/* <Card.Header className="card-header1">{comment.title}</Card.Header> */}
                              <Card.Text>{comment.body}</Card.Text>
                          </Card.Body>
                          {/* <Card.Link className="post-comments-links" align="left"><u>{post.comments.length} Comments</u></Card.Link> */}
                      </Card>
                      
                  );
              });
              return result;
              console.log("result:", result);
          }
      };
    
    
    render() {
        // console.log(this.constructor.name)
        // console.log(this.props.currentPost.id)
        return (

            <div>
                <div class="header">
                    <Navbar>
                        <Navbar.Brand href="/homepage">Jhana</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className="nav-button1" href="">My Journal</Nav.Link> <br></br>
                                <Nav.Link className="nav-button2" href="/homepage">Community</Nav.Link> <br></br>
                                <Nav.Link className="nav-button3" href=""onClick={this.props.handleLogout}>Logout</Nav.Link> <br></br>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div class="content">
                    <img align="center" className="Homepage-pic" src="https://lh5.googleusercontent.com/DEVopYWLqMZVH541bmSHGNlQMn5lbcMkUw6val09DwnGHRSPISm43E9-TfsPaH0HnnY_Oo7HqHvRxV6apH014hX57FbOfa5QbPvEjwc" />
                    <h2 align="center">Welcome to our Community</h2>
                    <p className="Homepage-p">{this.intro}</p>
                </div>

                <div class="footer">
                    <div className="NewPost-div">
                        <br></br>
                        <p>Hi {this.props.currentUser.first_name}!</p>
                        <p href="javascript" onClick={e => this.modalOpen(e)}> Create a New Post </p>
                        <p> Search Community</p>
                    </div>


                    {/* **************************************************** */}
                    <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
                        <h2>Create a new post!</h2>
                        <div className="form-group">
                            <label>Enter Title:</label>
                            <input
                                type="text"
                                value={this.state.title}
                                name="title"
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Enter body:</label>
                            <input
                                type="text"
                                value={this.state.body}
                                name="body"
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <button onClick={e => {
                                this.props.newPost(this.state, this.constructor.name);
                                this.modalClose();
                            }} type="button">
                                Submit
                            </button>
                        </div>
                    </Modal>
                    {/* **************************************************** */}

                    <div>
                        <Card className="postCards">
                            <Card.Title className="card-title1">{this.props.currentPost.user_id}</Card.Title>
                            <Card.Body>
                                <Card.Header className="card-header1">{this.props.currentPost.title}</Card.Header>
                                <Card.Text>{this.props.currentPost.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        {this.renderComments()}
                    </div>
                    <div>
                
                        <Form.Control 
                        onKeyDown={this.handleEnter}
                        // onKeyDown={(e) => {e.key === "enter" ? this.props.newComment(this.state.commentBody): null}}
                        className="new-comment-form" 
                        placeholder="Add a comment" 
                        type="text"
                        value={this.state.commentBody}
                        name="commentBody"
                        onChange={e => this.handleChange(e)} />
                        <br />
                        {/* <div className="form-group">
                            <button onClick={e => {
                                this.props.newComment(this.state.commentBody)
                            }} type="button">
                                Submit
                            </button>


                            <button onKeyDown={e => {
                                this.props.newComment(this.state.commentBody)
                            }} type="button">
                        </div> */}
                        
                    
                    </div>
                </div>

            </div>
        );
    }
}

export default PostShow

