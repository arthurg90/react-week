// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import React, { Component } from "react";

class Length extends Component {
	constructor(props) {
	    super(props);
	    this.state = { value: "Enter something" };
        this.update = this.update.bind(this);

	}

	// e is the standard DOM event object
update(e) {
    // e.target is the DOM element the event fired on
    // input elements have a value property that represents their current value
    this.setState({ value: e.target.value });
}

    render() {
        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input onChange={ this.update } value={ this.state.value } className="form-control" />
                <p className="help-block">Length: { this.state.value.length } characters</p>
            </div>
        );
    }
}

export default Length;


