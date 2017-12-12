import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg'
import CreateProfile from './CreateProfile';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
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
    		});}
	checkUserExists = (event) => 
		{
		
		RouteToCreate
	
	}


	render(){
	
		return(
			<div>
				<MuiThemeProvider>
					 <TextField
          				id="text-field-controlled"
          				value={this.state.username}
          				onChange={this.changeUsername}
        				/><br/>
					 <TextField
          				id="text-field-controlled"
          				value={this.state.password}
          				onChange={this.changePassword}
        				/><br/>
					<RaisedButton
					label="Log In"
      					labelPosition="before"
      					style={styles.button}
					onClick={this.checkUserExists}
					/>
					
				</MuiThemeProvider>
			</div>

		)
	
	}}
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


	const RouteToCreate = () =>{
		<Router>
    			<div>
      			<ul>
        		<li><Link to="/CP">CreateProfile</Link></li>
			</ul>
			<hr/>
			<Route exact path="/CP" component={CreateProfile}/>
			</div>
		</Router>
	}
	const Home = () => {
  		<div>
   	 		<CreateProfile/>
  		</div>
	}


export default StartScreen;
