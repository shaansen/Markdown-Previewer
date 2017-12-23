import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import MView from './MView'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			input: ""
		}
	}

	render() {

		var divStyle = {
		  color: 'white',
		  background: 'red'
		};

		return <div>
			<h1 style={divStyle}>Markdown Previewer</h1>
			<textarea 
				rows="4" cols="50"
				cols="100" 
				rows="35" 
				onChange={e => this.setState({input: e.target.value})}></textarea>
			<MView input={this.state.input}/>
		</div>
	}
}

ReactDOM.render(<App />,document.getElementById("root"))