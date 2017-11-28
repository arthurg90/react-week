import React, { Component } from "react";

class SquareClick extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
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

     	let { colour } = this.props;	
        
        return (
            <div style={{ background: colour, width: "200px", height: "200px", border: "2px solid", borderColor: this.state.value ? "black" : colour }} onClick={ this.clicked }>

    		</div>


        );

        
    }
}


export default SquareClick;

