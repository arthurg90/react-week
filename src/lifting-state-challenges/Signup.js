// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

import React, { Component } from "react";
import Password from "./Password";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [
                { label: "Password", value: "" },
                { label: "Confirm Password", value: "" },
            ], 
        };
    } 

    update(index, value) {
    // get a copy of the current inputs array
    let inputs = this.state.inputs.slice();
    let { minimumLength } = this.props;

    inputs[index].value = value;

    // save the state
    this.setState({ inputs });
    
    }

    render() {

    return (
        <form>
            { this.state.inputs.map(({label, value}, i) => (
                <Password
                    key={ i }
                    label={ label }
                    value={ value }
                    onChange={ (e) => this.update(i, e.target.value) }
                />
            ))}
        </form>
    );
    }
}

export default Signup;