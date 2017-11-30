import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

    clicked(button) {
        this.setState({ selected: button })
    }

//this.state.selected= " " is a true or false statement in the render bit, this.state.selected state gets updated onClick, so the logic bit checks whether the selected state is equal to the corresponding number, the colour is assigned in the button.jsx sub-component (red if selected == true or blue if selected == false ). On loading the First button is red because its selected state matches the state of 1, making the colour red, onClick -> this selects the button and moves up to state to make it the selected button and assigns it the number 1, Button.jsx checks whether the value == 1 and asigns it the btn-primary prop( red colour )

    render() {
        return (
            <div>
                <Button selected={ this.state.selected == 1 } name="First" onClick={ () => this.clicked(1) } /> 
                <Button selected={ this.state.selected == 2 } name="Second" onClick={ () => this.clicked(2) } />
                <Button selected={ this.state.selected == 3 } name="Third" onClick={ () => this.clicked(3) } />
                <Button selected={ this.state.selected == 4 } name="Fourth" onClick={ () => this.clicked(4) } />
            </div>    
        );
    }
}

export default Buttons;