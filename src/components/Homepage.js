import React, { Component} from "react";
import { Card, Navbar, Nav, Modal } from "react-bootstrap";

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
                  // {<img src={this.img}>}
                    <Card onClick={() => {this.props.renderSpecificPost(post)}} className="postCards">
                        <Card.Title className="card-title1"> Admin </Card.Title>
                        <Card.Body>
                            <Card.Header className="card-header1">{post.title}</Card.Header>
                            <Card.Text>{this.truncate(post.body)}</Card.Text>
                        </Card.Body>
                        <Card.Link className="post-comments-links" align="left"><u>{post.comments.length} Comments</u></Card.Link>
                    </Card>
                    
                );
            });
            return result;
        }
    };
    
    
    render() {
        
        return (
           
            <div>
                <div class="header">
                    <Navbar>
                        <Navbar.Brand href="/homepage">Jhana</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link className="nav-button1" href="/chat">My Messages</Nav.Link> <br></br>
                                <Nav.Link className="nav-button2" href="">Community</Nav.Link> <br></br>
                                <Nav.Link className="nav-button3" href="" onClick={this.props.handleLogout}>Logout</Nav.Link> <br></br>
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
                                this.props.newPost(this.state);
                                this.modalClose();}} type="button">
                                Submit
                            </button>
                        </div>
                    </Modal>
        {/* **************************************************** */}

                    <div>
                        {this.renderPosts()}
                    </div>
                    <p href="javascript" onClick={() => { this.props.fetchMore('Next') }}> Next </p>
                    <p href="javascript" onClick={() => { this.props.fetchMore('prev') }}> prev </p>
                </div>

            </div>
        );
    }
}
export default Homepage;
