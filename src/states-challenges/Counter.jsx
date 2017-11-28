import React, { Component } from "react";

class Counter extends Component {
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
	        
	        // get current value
	        let current = this.state.counter;

	        let { max } = this.props;
	        
	        // set new value
	        if (current < max) {
		        this.setState({ counter: current + 1 });
	    	}

	    }

	clickedDown() {
	        
	        // get current value
	        let current = this.state.counter;
	        
	        // set new value
	        if (current > 0) {
	        	this.setState({ counter: current - 1 });
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




 // It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate. 

export default Counter;


