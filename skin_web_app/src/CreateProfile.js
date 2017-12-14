import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class CreateProfile extends Component{
	constructor(props){
		super(props);
		this.state = { username: '', password : '', email : '', birthday : '', fhistory : false, phistory : false, gender:'', confpassword:'', api : this.props.api}
	}
 		changeUsername = (event) => {
    		this.setState({
      		username: event.target.value,
    		});
 		};
		changePassword= (event) => {
    		this.setState({
      		password: event.target.value,
    		});	
 		};
		changeEmail= (event) => {
    		this.setState({
      		email: event.target.value,
    		});	
 		};
		confirmpword = (event) =>{
			this.setState({confpassword:event.target.value});
		};
		checkPassword= (conf) => {
    			if (conf !== this.state.password) {
				alert("Passwords must match");
			}
		};
		setBday = (event,date) => {
			this.setState({
			birthday:date,
			});
		};
		updatePhistory() {
    			this.setState((oldState) => {
      				return {
        			phistory: !oldState.phistory,
      				};
    			});
  		};
		updateFhistory() {
    			this.setState((oldState) => {
      				return {
        			fhistory: !oldState.fhistory,
      				};
    			});
  		};
		sendtodb= (dat) =>{
			if (String(this.state.password)===(String(this.state.confpassword))){
                    this.state.api.post('/create_new_profile', dat)
                        .then(() => {this.props.onScreenChange('homescreen', this.state.username)})
			}
			else{
				alert("Passwords must match")
			}
		};
		
		changeGender=(event,index,value)=>
			this.setState({gender:value});
		

	render(){
		return(
			<MuiThemeProvider>
				<div> 
					<header className="App-header">
                    			<h1 className="App-title">Create Profile</h1>
        				</header>
					<TextField
      					hintText="Username"
					    value={this.state.username}
    					onChange= {this.changeUsername} 
					/><br />
			
					<TextField
      					hintText="Password"
						value={this.state.password}
    					onChange= {this.changePassword}
    					type="password"
					/><br />
					<TextField
      					hintText="Confirm Password"
    					onChange= {this.confirmpword}
    					type="password"
					/><br />
					<TextField
      					hintText="Email"
						value={this.state.email}
    					onChange= {this.changeEmail} 
					/><br />
					<DatePicker 
					onChange={this.setBday}
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
					floatingLabelText={this.state.gender}
          				value={this.state.gender}
          				onChange={this.changeGender}
          				hintText="Gender"
        				>
          				<MenuItem value={"Male"} primaryText="Male (xy)" />
          				<MenuItem value={"Female"} primaryText="Female (xx)" />
        				</SelectField><br />
					<RaisedButton
					label="Create Profile"
     		 			labelPosition="before"
      					style={styles.button}
      					containerElement="label"
					onClick={()=>{this.sendtodb({username:this.state.username, password:this.state.password, personal_history:this.state.phistory, family_history:this.state.fhistory, gender:this.state.gender,email:this.state.email,bday:this.state.birthday})}}
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

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};
export default CreateProfile;
