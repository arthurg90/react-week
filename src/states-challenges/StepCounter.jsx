import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);
        // setup our state
        this.state = {
            counter: 0,
        };

        this.clickedUp = this.clickedUp.bind(this);
        this.clickedDown = this.clickedDown.bind(this);

    }
	
	clickedUp() {

	        let current = this.state.counter;
	        let { max, step } = this.props;

	        if (current < max) {
	        	this.setState({ counter: current + +step });
	    	}

	    }

	clickedDown() {

	        let current = this.state.counter;
	        let { max, step } = this.props;

	        if (current > 0) {
	        	this.setState({ counter: current - step });
	        }

	    }

	        
	    render() {

	        return (
	            <div>
	            	<h1> { this.state.counter } </h1>
	            	<button onClick={ this.clickedUp }>+</button>
	            	<button onClick={ this.clickedDown }>-</button>
	    		</div>
	        );

	    }
	}


// Create a <StepCounter max="100" step="5" /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.


export default StepCounter;


