import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
class CreateProfile extends Component{
	constructor(){
		super();
		this.state = { username: '', password : '', email : '', birthday : '', fhistory : false, phistory : false}
	}
 		changeUsername = (event) => {
    		this.setState({
      		username: event.target.value,
    		});
 		}
		changePassword= (event) => {
    		this.setState({
      		password: event.target.value,
    		});	
 		}
		changeEmail= (event) => {
    		this.setState({
      		email: event.target.value,
    		});	
 		}

		checkPassword= (event) => {
    		
      			var checker = event.target.value
    			if (checker !== this.state.password) {
				alert("Passwords must match");
			}
		}
		setBday = (event) => {
			this.setSTate({
			birthday:event.target.value,
			});
		}
		updatePhistory() {
    			this.setState((oldState) => {
      				return {
        			phistory: !oldState.phistory,
      				};
    			});
  		}
		updateFhistory() {
    			this.setState((oldState) => {
      				return {
        			fhistory: !oldState.fhistory,
      				};
    			});
  		}
		sendtodb(dat){
			var jsonformat = JSON.stringify(dat);
			axios.post('/user' , jsonformat)}


	render(){
		return(
			<MuiThemeProvider>
				<div> 
					<header className="App-header">
                    			<h1 className="App-title">CreateProfile</h1>
        				</header>
					<TextField
      					hintText="Username"
      					errorText="This field is required"
					value={this.state.username}
    					onChange= {this.changeUsername} 
					/><br />
			
					<TextField
      					hintText="Password"
      					errorText="This field is required"
					value={this.state.password}
    					onChange= {this.changePassword} 
					/><br />
					<TextField
      					hintText="Confirm Password"
      					errorText="This field is required"
    					onChange= {this.checkPassword} 
					/><br />
					<TextField
      					hintText="Email"
      					errorText="This field is required"
					value={this.state.email}
    					onChange= {this.changeEmail} 
					/><br />
					<DatePicker 
					onDismiss={this.setBday}
					hintText="Birthday" 
					/>
					<Checkbox
					label="Personal History of Melanoma?"
          				checked={this.state.phistory}
         				onCheck={this.updatePhistory.bind(this)}
          				style={styles.checkbox}
					/>
					<Checkbox
					label="Family History of Melanoma?"
          				checked={this.state.fhistory}
         				onCheck={this.updateFhistory.bind(this)}
          				style={styles.checkbox}
					/>
					<RaisedButton
					label="Create Profile"
     		 			labelPosition="before"
      					style={styles.button}
      					containerElement="label"
					onClick={this.sendtodb({username:this.state.username, password:this.state.password,email:this.state.email,bday:this.state.birthday,phist:this.state.phistory,fhist:this.state.fhistory})}
					/>
 				</div>	
			</MuiThemeProvider>	
		);		
	}	
}
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
export default CreateProfile;
