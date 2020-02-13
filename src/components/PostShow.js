import React, { Component } from 'react'
import { Card, Navbar, Nav, Modal, Form } from "react-bootstrap";

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

    handleEnter = (e) => {
        if (e.key === "Enter") {
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
                    <div class="row p-3">
                        <div class="col-sm-1">
                            <a href="#"><img src="img/avater.png" alt="" /></a>
                        </div>

                        <div class="col-sm-10 offset-sm-1">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title bb"><a href="#"><img src="img/avater.png" alt="" />User Name</a> <span class="date"><a href="#">1/29/2020</a></span></h5>
                                    <p class="card-text bcopy pt-2">{comment.body}</p>

                                    <div class="float-right">
                                        <span class="lc"><a href="#"><i class="far fa-heart"></i> Like</a></span> <span class="lc"><a href="#"><i class="far fa-comment-alt"></i> </a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-color">
                        <a class="navbar-brand" href="#">Jhana</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarText">
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item">
                                    <a href="/welcome" class="badge badge-warning">Community</a>
                                </li>
                                {/* <li class="nav-item">
                                <a href="" class="badge badge-warning">My Journals</a>
                            </li> */}
                                <li class="nav-item">
                                    <a href="/chat" class="badge badge-warning">Messages</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" onClick={this.props.handleLogout} class="badge badge-warning">Logout</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>

                {/* ************************************************************************************************************ */}
                <div class="container">
                    <div class="row pt-5 m-auto text-center">
                        <div class="col-sm-12">
                            <img src="img/2.png" alt="" width="20%" />

                            <h1 class="bheader">Welcome to the Community! </h1>

                            <p class="bcopy">This community space is for survivors, loved ones, and educators to share their thoughts and experiences to connect with other members of the community who have been affected by sexual assault. </p>

                        </div>

                    </div>
                </div>
                <div class="hborder w-100"></div>


                {/* ************************************************************************************************************ */}

                <div class="container">
                    <div class="row pt-5 m-auto pb-5">

                        <div class="col-sm-8 order-2 order-sm-1">
                            <div class="row">
                                <div class="col-sm-2">
                                    <a href="#"><img src="img/avater.png" alt="" /></a>
                                </div>
                                <div class="col-sm-10">
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title"><a href="#"><img src="img/avater.png" alt="" />User Name</a> <span class="date"><a href="#">1/29/2020</a></span></h5>
                                            <div class="bheader text-center bb pb-2">{this.props.currentPost.title}</div>
                                            <p class="card-text bcopy pt-2">{this.props.currentPost.body}</p>

                                            <div class="float-right">
                                                <span class="lc"><a href="#"><i class="far fa-heart"></i></a> <a href="#">42 Likes</a></span> <span class="lc"><a href="#"><i class="far fa-comment-alt"></i></a>  <a href="#"></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {this.renderComments()}
                        </div>
                        <div class="col-sm-4 text-center pt-3 order-1 order-sm-2 mb-5">
                            <div class="bg-color2 py-5 rounded">
                                <div class="bheader mb-2">Hi {this.props.currentUser.first_name}!</div>

                                <a onClick={e => this.modalOpen(e)} class="bcopy bheader text-dark font-weight-bold" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i> Create A New Post</a>
                                <div class="bcopy bheader font-weight-bold"><i class="fas fa-search"></i> Search Community</div>

                            </div>
                        </div>





                        <Modal show={this.state.modal} >
                            <div class="modal-dialog modal-lg" role="document">
                                <form>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span>&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">

                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    value={this.state.title}
                                                    name="title"
                                                    onChange={e => this.handleChange(e)}
                                                    className="yoyoy"
                                                    // style="border: none;border-bottom: 2px solid #60833A;border-radius: 0;"  
                                                    class="form-control" id="Title" placeholder="Tilte" required="required" />
                                            </div>
                                            <div class="form-group">
                                                <textarea
                                                    type="text"
                                                    value={this.state.body}
                                                    name="body"
                                                    onChange={e => this.handleChange(e)}
                                                    className="yoyoy"
                                                    // style="border: none;border-bottom: 2px solid #60833A;border-radius: 0;" 
                                                    class="form-control" id="message-text" rows="10" placeholder="Type Something" required="required"></textarea>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <div class="form-group">
                                                <button onClick={e => {
                                                    this.props.newPost(this.state);
                                                    this.modalClose();
                                                }}
                                                    type="submit" class="btn badge-warning">Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </Modal>
                    </div>

                </div>

                <div>
                {/* <div class="col-sm-10">
                        <form className="new-comment-form"
                        action="">
                            <textarea 
                            onChange={e => this.handleChange(e)}
                            name="commentBody"
                            class="w-100 p-2" required="required"></textarea>
                            <button onClick={e => {
                                this.props.newComment(this.state.commentBody)
                            }} type="submit" class="badge badge-warning float-right">Post</button>
                        </form>
                    </div> */}
                    <Form.Control
                        onKeyDown={this.handleEnter}
                        // onKeyDown={(e) => {e.key === "enter" ? this.props.newComment(this.state.commentBody): null}}
                        className="new-comments"
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

        );
    }
}

export default PostShow

