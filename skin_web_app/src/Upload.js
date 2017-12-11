import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Image from 'react-image-file';
import axios from 'axios';
class Upload extends Component{
	constructor(){
		super();
		this.state={image:''}
	}
	uploadFile = (event) => {
		this.setState({image:event.target.value});
	}
	getPrediction = (image) =>{
		var imstring = JSON.stringify({'image':image})
		axios.post('/prediction',imstring)}
	render(){
		return(
			<div>
				<MuiThemeProvider>
					<RaisedButton
      					label="Choose an Image"
     					labelPosition="before"
      					style={styles.button}
      					containerElement="label"
   					>
      					<input 
					type="file" 
					value={this.state.image} 
					onChange={this.uploadFile} 
					style={styles.exampleImageInput} 
					/>
					<Image file={this.state.image} alt='some text'/>

					</RaisedButton>
					<RaisedButton
					label="Get Prediction"
     					labelPosition="before"
      					style={styles.button}
					onClick={this.getPrediction(this.state.image)}
      					containerElement="label"
   					/>

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
export default Upload;

