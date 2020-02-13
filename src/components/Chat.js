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

  renderMessages = () => {
    if (this.props.myConvos) {
      const result = this.props.myConvos.map(convo => 
                                    convo.map(msg => {
          return (
            <div class="row">
              <div class="col-2 col-sm-1">
                <a href="#"><img src="img/avater.png" alt="" width="40px" /></a>
              </div>
              <div class="col-10 col-sm-11">
                <div class="chat">
                  <p class="inbox">{msg.body}</p>
                </div>
              </div>
            </div>
          )
        }
        );
      );
      // console.log(result)
      return result;
    }

  };




  render() {
    console.log(this.props.myConvos)
    return (








      <div>

        <div>{this.props.myConvos.map(convo => < Convo
          setConvo={this.props.setConvo}
          convo={convo} key={convo.id} />)}
          <div class="col-sm-8 pm">
            <div class="chat-head">
              <h4><a href="#"><b class="username">User Name 1</b></a></h4>
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
                        <button onClick={e => this.props.handleSendEvent(this.state.currentChatMessage)} class="btn badge-primary">

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




