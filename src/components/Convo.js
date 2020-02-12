import React, { Component } from "react";
import { Card, Navbar, Nav, Modal, Form} from "react-bootstrap";

class Convo extends React.Component {


  render() {
   
    return (
      <div onClick={() => this.props.setConvo(this.props.convo)}>
       <Card className="commentCards">
                          <Card.Title className="card-title1"> Admin </Card.Title>
                          <Card.Body>
                              <Card.Header className="card-header1">{this.props.convo.receiver_id}</Card.Header>
                              {/* <Card.Text>{convo.body}</Card.Text> */}
                          </Card.Body>
                          {/* <Card.Link className="post-comments-links" align="left"><u>{post.comments.length} Comments</u></Card.Link> */}
                      </Card>
      </div>
     
    );
  }
}

export default Convo;
