import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

export default class MVIew extends Component {
	
	markUp() {
		return { __html: marked(this.props.input, { sanitize: true }) };
	}
	
	render() {
		const input = this.props.input
		if(input === null) {
			return <div></div>
		}

		return (<div className="col-xs-6">
				<h3>Output</h3>
				<div dangerouslySetInnerHTML={this.markUp()}></div>
			</div>)
	}
}