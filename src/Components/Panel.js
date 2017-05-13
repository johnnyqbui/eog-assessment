import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
	margin: 'auto',
	width: '200px',
}

class Panel extends Component {
	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}
	render() {
		return (
			<div className="panel">
			  <RaisedButton
			  	backgroundColor="#EF9A9A"
			  	label="Map With Markers"
			  	style={buttonStyle}
			  	labelColor="#fff"
			  	onClick={this.onStatusChange('markers')}
			  />
			  <RaisedButton
			  	backgroundColor="#B39DDB"
			  	label="Map With Shapes"
			  	style={buttonStyle}
			  	labelColor="#fff"
			  	onClick={this.onStatusChange('shapes')}
			  />
		    </div>
		)
	}
};

export default Panel;