// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>

import React, { Component } from "react";

class List extends Component {
	constructor(props) {
	    super(props);
	    this.state = { value: "", array: [] };			//storing the states

        this.update = this.update.bind(this);			//bind the events hndlers to the states
	    this.clicked = this.clicked.bind(this);

	}

update(e) {												//event handler for input upating (e) object is needed for updating reference
  
    this.setState({ value: e.target.value });
}

clicked() {											//event handler for clicking add button
	let arrayCopy = this.state.array.slice();			//copying the array so that things are added, not overwritten in the array
	arrayCopy.push(this.state.value);
	this.setState({array: arrayCopy});					//set state to this ccopied array
}


render() {

	const listItems = this.state.array.map((value, index) =>			//store {listItems} as a var for clarity
	  <li key={index}>
	    {value}
	  </li>
	);

        return (
            <div className="form-group">
                <input onChange={ this.update } value={this.state.value} className="form-control" />		
                <button onClick={ this.clicked }>Add</button> 
                <ul> 
                    {listItems}					
                </ul>
            </div>
        );
    }
}

export default List;

           
