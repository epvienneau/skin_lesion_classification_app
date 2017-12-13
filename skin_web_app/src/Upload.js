import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Image from 'react-image-file';
import axios from 'axios';
 
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';

class Upload extends Component{
	constructor(props){
		super(props);
		this.state={username:this.props.username,image:'',malignant:'.6',benign:'.4',color:'blue',imname: ''}
	}
	uploadFile = (event) => {
		this.setState({image:event.target.value});
		console.log(this.state.image)
		if (parseInt(this.state.malignant)>0.5){
			this.setState({color:'red'})
		}
			else{
				this.setState({color:'green'})}
	}
    getPrediction(){
		console.log('hi')
		var imstring = JSON.stringify({'image':this.state.image})
		api.post('/prediction',{'image':this.state.image})
			.then((data)=>{this.parseData(data.data), console.log(data.data)})
		api.post('/uploadimage',{'imname':this.state.imname, 'username': this.state.username})
			.then((data) => console.log(data.data))
	}
	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(file);
			this.setState({image: reader.result, imname: file.name});
		}
	}
	parseData = (data) => {
		var mal = data['malignant']
		var ben = data['non malignant']
		this.setState({malignant: mal, benign: ben});
	}
	render(){
		
		return(
				<MuiThemeProvider>
						<div>
						<header className="App-header">
                   				 <h1 className="App-title">Upload an Image</h1>
        					</header> <br />
	    					</div>	
					<RaisedButton
					label="Get Prediction"
     					labelPosition="before"
      					style={styles.button}
					onClick={() => this.getPrediction(this.state.image)}
      					containerElement="label"
   					/>	
				<UploadField onFiles={this.onUpload}>
					<div>
						<MuiThemeProvider>
							<RaisedButton
      							label="Choose an Image"
     							labelPosition="before"
      							style={styles.button}
      							containerElement="label"
   							/>
						</MuiThemeProvider>
					</div>
				</UploadField>
				<center>
				<div style={{backgroundColor: this.state.color,width:'200px', 
							height:'200px'}}>
				
				<img src={this.state.image} width="90" height="90"/>
				</div>		
				<p> Percent Malignant {this.state.malignant}</p>
				<p> Percent Benign {this.state.benign}</p>
				</center>
				</MuiThemeProvider>
	
		)
	}
}
var api = axios.create({baseURL:'http://192.168.0.5:8000'});
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
export default Upload;

