import React, { Component } from 'react';

class ToDo extends Component {
	render() {
		return (
			<li>
				<input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
				<span>{ this.props.description }</span>
				<input type="button" id="deleteButton" deleted={this.props.isDeleted} onClick={this.props.deleteTodo } />
                               	<label for="deleteButton">Delete Item</label>
			</li>
		);
	}
}

export default ToDo;
