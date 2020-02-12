import React from "react";
import { Form} from "react-bootstrap";

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = { 
        body: "",
        user_id: 3,
        conversation_id: 2,
    };
  }
  
  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
//   handleSubmit(e) {
//       console.log(e.target.value)
//     // e.preventDefault();
//     // App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
//     // this.setState({ body: "" });
//   }

handleChange = (e) => {
    console.log(e.target.value)
 this.setState({
   [e.target.name]: e.target.value
 })
}


  
  render() {
      console.log(this.state.body)
    return (
      <div>
        {/* <form 
        // onSubmit={this.handleSubmit()}
        >
          <input
            type="body"
            value={this.state.body}
            onChange={e => this.handleChange(e)}
            // onChange={this.update("body")}
            placeholder="Type message here"
          /> */}
          {/* <input type="submit" /> */}
          <Form.Control 
                        onKeyDown={this.handleEnter}
                        className="new-comment-form" 
                        placeholder="Write a message" 
                        type="text"
                        value={this.state.body}
                        name="body"
                        onChange={e => this.handleChange(e)} />
                        <br />
                <div className="form-group">
                    <button onClick={e => {
                        this.props.messageSubmit(this.state.body);
                    }} type="button">
                        Submit
                    </button>
                </div>
      </div>
    );
  }
}

export default MessageForm;