import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password: ''}
  }
  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }
  
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
            onChange={this.changePassword}/>
	    <br/></center>
	    <RaisedButton
	    label="Log In"
      	    labelPosition="before"
      	    style={styles.button}
	    onClick={() => {this.props.onScreenChange('homescreen', this.state.username)}}/>
	    <RaisedButton
	    label="Create Profile"
      	    labelPosition="before"
      	    style={styles.button}
	    onClick={() => {this.props.onScreenChange('create-profile', this.state.username)}}/>
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
