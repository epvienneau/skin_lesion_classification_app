import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class CreateProfile extends Component{
	constructor(){
		super();
		this.state = { username: '', password : '', email : '', birthday : '', fhistory : false, phistory : false, gender:''}
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
			this.setState({
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
			api.post('/create_new_profile' , jsonformat).then(()=>{this.props.onScreenChange('homescreen', this.state.username)})}
		changeGender= (event, index, value) => this.setState({gender:event.target.value});

	render(){
				return(
			<MuiThemeProvider>
				<div> 
					<header className="App-header">
                    			<h1 className="App-title">Create Profile</h1>
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
    					onChange= {()=>{this.checkPassword}} 
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
					<SelectField
          				floatingLabelText="Select Gender"
          				value={this.state.value}
          				onChange={this.changeGender}
        				>
          				<MenuItem value={1} primaryText="Male" />
          				<MenuItem value={2} primaryText="Female" />
        				</SelectField><br />
					<RaisedButton
					label="Create Profile"
     		 			labelPosition="before"
      					style={styles.button}
      					containerElement="label"
					onClick={this.sendtodb({username:this.state.username, password:this.state.password,email:this.state.email,bday:this.state.birthday,phist:this.state.personal_history,family_hist:this.state.fhistory,gender:this.state.gender})}
					/><br/>
					<br/>
					<RaisedButton
					label="Back to Start"
					labelPosition="before"
					style={styles.button}
					containerElement='label'
					onClick={()=>{this.props.onScreenChange('startscreen', '')}}
					/><br/>
 				</div>	
			</MuiThemeProvider>	
		);		
	}	
}
var api = axios.create({baseURL:'http://67.159.88.37:8000'});

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
export default CreateProfile;
