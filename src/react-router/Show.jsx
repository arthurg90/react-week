import React, { Component } from "react";

class Show extends Component {
    constructor(props) {
        super(props);

        this.colours = {
            1: "red",
            2: "yellow",
        };
    }

    render() {
        return <p>{ this.colours[this.props.colour] }</p>;
    }
}

export default Show;