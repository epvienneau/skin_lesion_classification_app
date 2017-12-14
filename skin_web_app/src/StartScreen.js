import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password: '', valid:'',api:this.props.api}
  }
  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  checklogin = () =>{
    if (this.state.username != undefined)
    {
        this.state.api.post('/checklogin', {
            username: this.state.username,
            password: this.state.password,
        })
            .then((data) => {
                this.setState({valid: data.data},
                    () => console.log(this.state.valid),
                )
            })
            .then(() => {
                if (this.state.valid == 'Valid credentials') {
			this.props.onScreenChange('homescreen', this.state.username)
            }})
   	 }
    else{
        Screen.setState({valid: 'Please input a username'})
    }
};

  render(){
    return(

        <MuiThemeProvider>
	    <div>
		<header className="App-header">
                    <h1 className="App-title">Welcome to SkinApp</h1>
        	</header>
	    </div>
            <center><TextField
	    id='usernamebox'
            value={this.state.username}
	    hintText="Username"
            onChange={this.changeUsername}/>
	    <br/></center>
	    <center><TextField
	    id='passwordbox'
            value={this.state.password}
	    	hintText="Password"
			type = "password"
            onChange={this.changePassword}/>
	    <br/>
		<div style={{fontSize: 10, fontFamily: 'Verdana', color: 'red'}}>
            {this.state.valid}
        </div></center>
	<center><RaisedButton
	    label="Log In"
      	    labelPosition="before"
      	    style={styles.button}
	    onClick={() => {this.checklogin(this.state.api,this.state.username)}}/> <br/></center>
	    <center><RaisedButton
	    label="Create Profile"
      	    labelPosition="before"
      	    style={styles.button}
	    onClick={() => {this.props.onScreenChange('create-profile', this.state.username)}}/></center>
	</MuiThemeProvider>
  
    )
  }
}
const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

export default StartScreen;
