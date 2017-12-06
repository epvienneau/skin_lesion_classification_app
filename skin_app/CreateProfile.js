import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Picker, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box'; 
export default class CreateProfile extends Component{
constructor(){
	super();
	this.state = { username: 'Username', password:'Password', confpassword:'Confirm Password', email:'Email',bday:"2018-01-01",phistory: false, fhistory:false, sex: 'Select Sex at Birth', emailpref:false, existing:false };
}

render(){
	return(
		<View>
			<Text style={styles.titleText}> Create New Profile  </Text>
			 <TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        			onChangeText={(text) => this.setState({username})}
       				value={this.state.username}
      			/>
			<TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({password})}
                                value={this.state.password}
                        />
			<TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({confpassword})}
                                value={this.state.confpassword}
                        />
			<TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({email})}
                                value={this.state.email}
                        />
			 <DatePicker
        			style={{width: 200}}
       				date={this.state.date}
       				mode="date"
        			placeholder="select date"
       				format="YYYY-MM-DD"
        			minDate="1900-05-01"
        			maxDate="2018-06-01"
        			confirmBtnText="Confirm"
        			cancelBtnText="Cancel"
        			customStyles={{
          			dateIcon: {
           			 position: 'absolute',
            			left: 0,
            			top: 4,
            			marginLeft: 0
          			},
          			dateInput: {
          			  marginLeft: 36
          			}
          			// ... You can check the source to find the other keys.
        			}}
        			onDateChange={(date) => {this.setState({date: date})}}
		      />
			<CheckBox
   			 style={{flex: 1, padding: 10}}
    			 onClick={()=>this.setState({phistory:'true'})}
   			 isChecked={false}
   			 leftText={'Personal History of Melanoma?'}
			/>
			 <CheckBox
                         style={{flex: 1, padding: 10}}
                         onClick={()=>this.setState({fhistory:'true'})}
                         isChecked={false}
                         leftText={'Family History of Melanoma?'}
                        />
			<Picker
  			 selectedValue={this.state.sex}
 			 onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
 			 <Picker.Item label="Select Sex at Birth" value="Select" />
			 <Picker.Item label="Male (xy)" value="Male" />
 			 <Picker.Item label="Female (xx)" value="Female" />
			</Picker>
			 <CheckBox
                         style={{flex: 1, padding: 10}}
                         onClick={()=>this.setState({emailpref:'true'})}
                         isChecked={false}
                         leftText={'Would you like to recieve emails?'}
                        />
			
		</View>
)
}

}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}); 

