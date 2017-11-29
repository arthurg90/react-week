import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

    clicked(button) {
        this.setState({ clicked: button })
    }

   render() {
        return ( 
            <Button selected={ this.state.selected == 1 } onClick={ () => this.clicked(1) } />
            <Button selected={ this.state.selected == 2 } onClick={ () => this.clicked(2) } />
        );
    }
}

export default Buttons;