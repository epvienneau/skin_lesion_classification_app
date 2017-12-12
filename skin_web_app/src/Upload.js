import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Image from 'react-image-file';
import axios from 'axios';
 
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';

class Upload extends Component{
	constructor(){
		super();
		this.state={image:'',malignant:'.6',benign:'.4',color:'blue'}
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
	getPrediction = (image) =>{
		console.log('hi')
		var imstring = JSON.stringify({'image':this.state.image})
		api.post('/prediction',{'image':this.state.image}).then((data)=>{this.parseData(data)})}
	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log("image!");
			this.setState({image: reader.result});
		}
	}
	parseData = (data) => {
		var mal = data['malignant']
		var ben = data['benign']
		this.setState({malignant: mal, benign: ben});
	}
	render(){
		
		return(
			<div>
	
				<MuiThemeProvider>
					
					<RaisedButton
					label="Get Prediction"
     					labelPosition="before"
      					style={styles.button}
					onClick={this.getPrediction(this.state.image)}
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
			</div>
		)
	}
}
var api = axios.create({baseURL:'http://10.197.81.202:8000'});
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

