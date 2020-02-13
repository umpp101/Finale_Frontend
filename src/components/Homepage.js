import React, { Component} from "react";
import { Card, Navbar, Nav, Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';

export class Homepage extends Component {

   constructor() {
       super()
   
       this.state = {
            currentPost: {},
            modal: false,
            title: "",
            body: "",
            view_count: 11,
            user_id: 3,
            category_id: 2
       }
   }
   
   handleChange = (e) => {
       console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
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
  truncate = function(str, length=400, ending='....'){
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
    
  intro =
  "This Community Space is for survivors, loved ones, educators to share their experiences, express their thoughts, connect with other members of their community who have been affected by sexual assault. ";
  img = "https://lh4.googleusercontent.com/x7skKzDs0peFDUV-BODxU7x9UYpxQyrPhQxwx1Df6tU1HFcxzPj0GHgcdIpU2bv9-LjwCYYcCQ1KevL0rr0D2p-V6Kmt3HIkA-2_fLTFK6QfntGyVQ7RVkZAg2Ni1YbGTzYS5xu1"
  
  renderPosts = () => {
      if (this.props.allPosts) {
          const result = this.props.allPosts.map(post => {
              return (
                <div class="row">
                      <div class="col-sm-2">
                          <a href="#"><img src="img/avater.png" alt="" /></a>
                      </div>
                      <div class="col-sm-10">
                          <div class="card" onClick={() => {this.props.renderSpecificPost(post)}}>
                              <div class="card-body">
                                  <h5 class="card-title"><a href="#"><img src="img/avater.png" alt="" />User Name</a> <span class="date"><a href="#">1/29/2020</a></span></h5>
                                  <div class="bheader text-center bb pb-2">{post.title}</div>
                                  <p class="card-text bcopy pt-2">{this.truncate(post.body)}</p>

                                  <div class="float-right">
                                      <span class="lc"><a href="#"><i class="far fa-heart"></i></a> <a href="#">42 Likes</a></span> <span class="lc"><a href="#"><i class="far fa-comment-alt"></i></a>  <a href="#"><u>{post.comments.length} Comments</u></a></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                );
            });
            return result;
        }
    };
    
    
    render() {
        
        return (
           
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-color">
                        <Link to='/homepage' class="navbar-brand" href="#">Jhana</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarText">
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item">
                                    <Link to="/welcome" class="badge badge-warning">Community</Link>
                                </li>
                                {/* <li class="nav-item">
                                    <a href="" class="badge badge-warning">My Journals</a>
                                </li> */}
                                <li class="nav-item">
                                    <Link to="/chat" class="badge badge-warning">Messages</Link>
                                </li>
                                <li class="nav-item">
                                    <div onClick={this.props.handleLogout} class="badge badge-warning">Logout</div>
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
                {this.renderPosts()}
            <p href="javascript" onClick={() => { this.props.fetchMore('Next') }}> Next </p>
            <p href="javascript" onClick={() => { this.props.fetchMore('prev') }}> prev </p>
            </div>
            <div class="col-sm-4 text-center pt-3 order-1 order-sm-2 mb-5">
                <div class="bg-color2 py-5 rounded">
                    <div class="bheader mb-2">Hi {this.props.currentUser.first_name}!</div>

                    <a   onClick={e => this.modalOpen(e)} class="bcopy bheader text-dark font-weight-bold" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i> Create A New Post</a>
                    <div class="bcopy bheader font-weight-bold"><i class="fas fa-search"></i> Search Community</div>

                </div>
            </div>

        </div>
        
    </div>

    <Modal show={this.state.modal} >       
     <div class="modal-dialog modal-lg" role="document">
            <form>
                <div class="modal-content">
                <div class="modal-header">
                    <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                            class="form-control" id="Title" placeholder="Tilte" required="required"/>
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
                                this.modalClose();}}
                                type="submit" class="btn badge-warning">Post</button>
                                </div>
                </div>
            </div>
            </form>
            
            </div>
          </Modal>
    </div>
        );
    }
}
export default Homepage;




// <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
// <h2>Create a new post!</h2>
// <div className="form-group">
//     <label>Enter Title:</label>
//     <input
//         type="text"
//         value={this.state.title}
//         name="title"
//         onChange={e => this.handleChange(e)}
//         className="form-control"
//     />
// </div>
// <div className="form-group">
//     <label>Enter body:</label>
//     <input
//         type="text"
//         value={this.state.body}
//         name="body"
//         onChange={e => this.handleChange(e)}
//         className="form-control"
//     />
// </div>

// <div className="form-group">
//     <button onClick={e => { 
//         this.props.newPost(this.state);
//         this.modalClose();}} type="button">
//         Submit
//     </button>
// </div>
// </Modal>


