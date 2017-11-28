import React, { Component } from "react";

class ToggleText extends Component {
    constructor(props) {
        super(props);
        // setup our state
        this.state = {
            value: true,
        };

        this.clicked = this.clicked.bind(this);
    }

	clicked() {
	        
	        // get current value
	        let current = this.state.value;
	        
	        // set new value
	        this.setState({ value: !current });

	    }
	        
	    render() {

	    	let { initial, alternate } = this.props;

	        return (
	            <div>
	            	<p>
	            		{ this.state.value ? initial : alternate }
	            	</p>
	            	<p>
	            		{ this.state.value ? initial : alternate }
	            	</p>
	            	<p>
	            		{ this.state.value ? initial : alternate }
	            	</p>
	            	<p>
	            		{ this.state.value ? initial : alternate }
	            	</p>

	            	<button onClick={ this.clicked }>Toggle</button>
	    		</div>
	        );

	    }
	}




 // It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate. 



export default ToggleText;


