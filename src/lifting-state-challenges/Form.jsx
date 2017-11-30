import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [
                { label: "Name", value: "Test" },
                { label: "Email", value: "blah@blah.com" },
            ], 
        };
    }

    update(index, value) {
    // get a copy of the current inputs array
    let inputs = this.state.inputs.slice();

    // update the value of the input with the given index
    inputs[index].value = value;

    // save the state
    this.setState({ inputs });
    
    }

    render() {
           
    return (
        <form>
            { this.state.inputs.map(({label, value}, i) => (
                <Input
                    key={ i }
                    label={ label }
                    value={ value }

                    // we need to use an inline function so that we
                    // can pass in a different value of i for each input
                    onChange={ (e) => this.update(i, e.target.value) }
                />
            ))}

            <button
                disabled={ !this.state.inputs.every(({ value }) => value) }
            >
                Submit
            </button>
        </form>
    );
    }
}

export default Form;