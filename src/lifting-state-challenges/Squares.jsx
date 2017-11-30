// Create a component <Squares> that displays two of your <Square> components. The first <Square>s border colour should always be the opposite of the second one. (You will need to change your <Square> component, so make sure you've got a copy of your original - or use Git)

import React, { Component } from "react";
import Square from "./Square";

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1,
        };
    }

    clicked(square) {
        this.setState({ selected: square })

    }

    render() {
        return (
        	<div>	
	        	<Square colour={ this.props.colour } selected={ this.state.selected == 1 } onClick={ () => this.clicked(1) } />
	        	<Square colour={ this.props.colour } selected={ this.state.selected == 2 } onClick={ () => this.clicked(2) } />
	        </div>	
        );
    }
}


export default Squares;


