import React, { Component } from "react";
import Convo from "./Convo"
class ChatRoom extends React.Component {
 constructor(props) {
     super(props)
 
     this.state = {
          currentChatMessage: ''
     }
 }
 


 handleChange = (e) => {
    // console.log(e.target.value)
 this.setState({
   [e.target.name]: e.target.value
 })
}


  updateCurrentChatMessage = (event) => {
    //   console.log(event.target.value)
    this.setState({
      currentChatMessage: event.target.value
    });
  }


    
    componentDidMount() {
      this.props.openWsConnection();
    }






  render() {
    // const messageList = this.state.messages.map(message => {
    //   return (
    //     <li key={message.id}>
    //       {message}
    //       <div ref={this.bottom} />
    //     </li>
    //   );
    // });
    // console.log(this.props)
    return (
      <div className="stage">
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
        <button onClick={e => this.props.handleSendEvent(this.state.currentChatMessage)} className="send">

          Send
        </button>
        {this.props.myConvos.map(convo => < Convo
                                            setConvo={this.props.setConvo} 
                                            convo={convo} key={convo.id}/>)}
      </div>
      // <div className="chatroom-container">
      //     <div>ChatRoom</div>
      //     <div className="message-list">{messageList}</div>
      //     <MessageForm messageSubmit={this.handleSendEvent} />
      // </div>
    );
  }
}

export default ChatRoom;
