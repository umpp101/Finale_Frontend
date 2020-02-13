import React, { Component } from "react";
// import { Card, Navbar, Nav, Modal, Form } from "react-bootstrap";

class Convo extends React.Component {


  // renderMessages = () => {
  //   if (this.props.allConvo) {
  //     const result = this.props.allConvo.map(convo => {
  //       return convo.messages.map(msg => {
  //         console.log(msg)
  //         return (
  //           <div class="col-10 col-sm-11">
  //             <div class="chat">
  //               <p class="inbox">{msg.body}</p>
  //             </div>
  //           </div>
  //         )
  //       });
  //     });
  //     console.log(result)
  //     return result;
  //   }

  // };





  render() {
    // console.log(this.props)
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
        <div class="container-fluid">
          <div class="row pb-5">
            <div class="col-md-4 br">
              <h1><b>Inbox</b></h1>
              <div class="row pt-3 btb ">
                <div class="col-sm-3 ">
                  <a href="#"><img src="./img/avater.png" alt="" /></a>
                </div>
                <div class="col-sm-9"
                  onClick={() => this.props.setConvo(this.props.convo)}>
                  <p><a href="#"><b class="username">{this.props.convo.receiver_id} is the receiver:  the other person name here</b> <span class="date"> 1:52 PM</span></a></p>
                  <p class="inbox"><a href="#">Preview for message here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Convo;
      // <div class="col-sm-8 pm">
      //   <div class="chat-head">
      //     <h4><a href="#"><b class="username">User Name 1</b></a></h4>
      //   </div>
      //   <div class="row p-3">
      //     <div class="col-sm-8 wrap">
      //       <div class="row">
      //         <div class="col-2 col-sm-1">
      //           <a href="#"><img src="img/avater.png" alt="" width="40px" /></a>
      //         </div>
      //         {/* <div class="col-10 col-sm-11">
      //             <div class="chat">
      //               <p class="inbox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dignissimos!</p>
      //             </div>
      //           </div> */}
      //         {this.renderMessages()}
      //       </div>

      //       <form action="">
      //         <div class="msg text-center">
      //           <div class="row">

      //             <div class="col-8 col-sm-9">
      //               <textarea className="textSpot" placeholder="Aa...." required="required"></textarea>
      //               {/* style={width: 100%} */}
      //             </div>
      //             <div class="col-4 col-sm-3">
      //               <input class="badge-warning" type="submit" value="Send" />
      //               {/* style={border-style: "solid", padding: "10px 20px"} */}
      //             </div>
      //           </div>
      //         </div>
      //       </form>
      //       {/* </div>
      //     </div> */}
      //     </div>
      //   </div>
      // </div>
