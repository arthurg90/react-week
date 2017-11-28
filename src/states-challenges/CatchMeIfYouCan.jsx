
import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);
        // setup our state
        this.state = {
            value: 0,
        };

        this.clicked = this.clicked.bind(this);

    }
	
	clicked() {

        // get current value
        let current = this.state.value;
        let { jump } = this.props; 
        
        // set new value
        this.setState({ value: current + +jump });
	    }

	    render() {

	        return (
	            <div>
	            	<button style={{position: "relative", top: this.state.value }} onClick={ this.clicked }>Jump!</button>
	    		</div>
	        );

	    }
	}


// Create a <CatchMeIfYouCan jump="100"> component. It should have a <button> that when clicked moves jump pixels down the screen.


export default CatchMeIfYouCan;


