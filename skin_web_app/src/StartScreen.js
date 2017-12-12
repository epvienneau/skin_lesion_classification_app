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
      username: event.target.value,
    });
  }
  
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <TextField
            id="text-field-controlled"
            value={this.state.username}
            onChange={this.changeUsername}/>
	    <br/>
	    <TextField
            id="text-field-controlled"
            value={this.state.password}
            onChange={this.changePassword}/>
	    <br/>
	    <RaisedButton
	    label="Log In"
      	    labelPosition="before"
      	    style={styles.button}
	    onClick={() => {this.props.onScreenChange('homescreen')}}/>
	</MuiThemeProvider>
      </div>
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
};

export default StartScreen;
