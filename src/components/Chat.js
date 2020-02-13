import React, { Component } from "react";
import Convo from "./Convo"
import { Link } from 'react-router-dom';


class ChatRoom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentChatMessage: '',
      selectedUser: ''
    }
  }



  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {

  }

  updateCurrentChatMessage = (event) => {
    //   console.log(event.target.value)
    this.setState({
      currentChatMessage: event.target.value
    });
  }



  componentDidMount() {
    if (Object.keys(this.props.currentUser).length !== 0) {
      this.props.openWsConnection();
    }

  }

  renderMessages = () => {
    if (Object.keys(this.props.currentConvo).length !== 0) {
      return this.props.currentConvo.messages.map(msg => {
        return (
          <div class="row">
            <div class="col-2 col-sm-1">
              {/* <a href="#"><img src="img/avater.png" alt="" width="40px" /></a> */}
            </div>
            <div class="col-10 col-sm-11">
              <div class="chat">
                <p class="inbox">{msg.body}</p>
              </div>
            </div>
          </div>
        )
      })

    }

  };

  // handleChange = (e) =>{
  //   console.log(e.target.value)
  // }

  // renderUsers = () => {
  //   if (this.props.allUsers){
  //     var usersOption = this.props.allUsers.map(user =>{
  //       console.log(user)
  //       return(
  //         <option value={user.id}>{user.first_name}</option>
  //       )
  //       console.log(usersOptions)
  //     })

  //   }
  // }

  getOtherUserName = () => {
    if (this.props.allUsers.length !== 0) {
      let otherUserId;
      if (this.props.currentUser.id === this.props.currentConvo.receiver_id){
        otherUserId = this.props.currentConvo.sender_id
      }else{
        otherUserId = this.props.currentConvo.receiver_id
      }
      let otherUser = this.props.allUsers.find(user => user.id === otherUserId) 
      return otherUser.first_name
    }

  }


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
        <h1><b>Inbox</b> </h1>
        <label for="allUsers">Choose a person to have a Convo with: </label>

        {/* <select id="allUsers">
          {this.renderUsers()}
        </select> */}
        <select id="allUsers" onChange={(e) => { this.props.handleNewConvo(e, e) }}>
          {this.props.allUsers.map(user =>
            <option key={user.key} value={user.id}>{user.first_name}</option>
          )};
  </select>

        <div>{this.props.myConvos.map(convo => < Convo
          setConvo={this.props.setConvo}
          convo={convo} key={convo.id} 
          allUsers={this.props.allUsers} 
          currentUser={this.props.currentUser}/>)}

          <div class="col-sm-8 pm">
            <div class="chat-head">
              <h4><b class="username">{this.props.currentConvoName}</b></h4>
            </div>
            <div class="row p-3">
              <div class="col-sm-8 wrap">
                {/* <div class="row">
                  <div class="col-2 col-sm-1">
                    <a href="#"><img src="img/avater.png" alt="" width="40px" /></a>
                  </div>
                  <div class="col-10 col-sm-11">
                    <div class="chat">
                      <p class="inbox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dignissimos!</p>
                    </div>
                  </div> */}
                <form action="">
                  <div class="msg text-center">
                    <div class="row">
                      <div class="col-8 col-sm-9">
                        <textarea
                          value={this.state.currentChatMessage}
                          onChange={e => this.updateCurrentChatMessage(e)}
                          type="text"
                          placeholder="Enter your message..."
                          className="textSpot" placeholder="Aa...." required="required"></textarea>
                        {/* style={width: 100%} */}
                      </div>
                      <div class="col-4 col-sm-3">
                        <button onClick={event => this.props.handleSendEvent(this.state.currentChatMessage, event)} class="btn badge-primary">
                          Send
                        </button>
                        {/* style={border-style: "solid", padding: "10px 20px"} */}
                      </div>
                    </div>
                  </div>
                </form>
                {/* <button onClick={e => this.props.handleSendEvent(this.state.currentChatMessage)} className="send">

        Send
      </button> */}
                {this.renderMessages()}
              </div>


              {/* </div>
          </div> */}
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      // </div>
    );
  }
}

export default ChatRoom;


{/* <div className="stage">
  <h1>Chat</h1>
    <div className="chat-logs"></div>
    <input
      value={this.state.currentChatMessage}
      onChange={e => this.updateCurrentChatMessage(e)}
      type="text"
      placeholder="Enter your message..."
      className="chat-input"
    />
    {/* <button onClick={this.props.sendMessage(this.state.currentChatMessage)} className="send"> */}
{/* <button onClick={e => this.props.handleSendEvent(this.state.currentChatMessage)} className="send">

      Send
    </button>
    {this.props.myConvos.map(convo => < Convo
                                        setConvo={this.props.setConvo} 
                                        convo={convo} key={convo.id}/>)}
  </div> */}




