// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.


import React, { Component } from "react";
    constructor(props) {
        super(props);
        // setup our state
        this.state = { value: 0 };         //store the initial states
        this.update = this.update.bind(this);			//bind the events handlers to the states

    }
class TempConverter extends Component {
    render() {
        return (
            <div className="form-group">
                <label>°C</label>
            	<input className="form-control" type="number"/>
                <label>°F</label>
            	<input className="form-control" type="number"/>
            </div>
        );
    }
}

export default TempConverter;


