import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {

constructor(){
  super();
  this.state={
  user_name:'',
  password:''
  }
 }


render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({user_name:newValue},() => console.log(this.state.user_name))} 
             />
           <br/>
            <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue},() => console.log(this.state.password))} 
             />
            <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(e) => this.props.handleLoginSubmit(e,this.state)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;