export default class CreateProfile extends Component{
constructor(){
        super();
        this.state = { username: '', password:'', confpassword:'', email:'',bday:"2018-01-01",phistory: false, fhistory:false, sex: 'Select Sex at Birth', emailpref:false, existing:false };
        this.JSONformat = {"username": this.state.username,"password":this.state.password};
}

render(){
        return(
                <ScrollView>
                        <Text style={styles.titleText}> Create New Profile  </Text>
			<Text> Edit Username </Text>
                         <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                                onChangeText={(text) => this.setState({username:text})}
                                placeholder={this.state.username}
                                value={this.state.username}
                        />
			<Text> Edit Password </Text>
                        <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                                onChangeText={(text) => this.setState({password:text})}
                                placeholder = {this.state.password}
                                value={this.state.password}
                        />
			<Text> Confirm New Password </Text>
                        <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                                onChangeText={(text) =>{ this.setState({confpassword:text})}}
                                placeholder = {this.state.password}
                                value={this.state.confpassword}
                        />
			<Text> Change your email </Text>
                        <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                                placehodler = {this.state.email}
                                onChangeText={(text) => this.setState({email:text})}
                                value={this.state.email}
                        />
			<Text> Change your birthday </Text>
                         <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
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
                         isChecked={this.state.phistory}
                         leftText={'Personal History of Melanoma?'}
                        />
                         <CheckBox
                         style={{flex: 1, padding: 10}}
                         onClick={()=>this.setState({fhistory:'true'})}
                         isChecked={this.state.phistory}
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
                        <Button
                         onPress={()=>checkPwords(this.state.password,this.state.confpassword)}
                         title="Edit Profile"
                        />
                </ScrollView>
)
}
}
// Works on both iOS and Android
function checkPwords(pw,confirmer){
        if (confirmer == pw){
                alert('Account Created!','Please log in','Ok')}
        else{
                alert('Invalid Confirmation','Please make sure your passwords match','Ok')}
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30
  },
});

