// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.

import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input className="form-control" />
            </div>
        );
    }
}

export default Input;


// export default Length;