import React, { Component } from "react";

class Adder extends Component {
    constructor(props) {
        super(props);
        // setup our state
        this.state = { sum: 0, array: [] };         //store the initial states

        this.update = this.update.bind(this);			//bind the events handlers to the states
        this.clickedAdd = this.clickedAdd.bind(this);
        this.clickedTotal = this.clickedTotal.bind(this);

    }

update(e) {												//event handler for input updating (e) object is needed for updating reference
  
    this.setState({ sum: +e.target.value });		//e.target.value is a constant representing the input value and will always be the same
}


clickedAdd() {	        
    // clicking add needs to take the input value and put it in a list

    let arrayCopy = this.state.array.slice();
    arrayCopy.push(this.state.sum);
	this.setState({array: arrayCopy});	 

}

clickedTotal() {		//on click needs to add up all the values in the list and display it
    let total = this.state.array.reduce((a, b) => a + b, 0);   //reduce array function 
    this.setState({sum: total})                 //set the sum to new total
}    

       
render() {

	const listItems = this.state.array.map((num, index) =>			//store {listItems} as a var for clarity
	  <li key={index}>{num}</li>
	);

        return (
            <div className="form-group">
            	<input onChange={ this.update } type="number" className="form-control"></input>
                <button onClick={ this.clickedAdd }>Add</button>
        		<button onClick={ this.clickedTotal }>Total</button>
                <ul> 
                    {listItems}					
                </ul>
                <h1> {this.state.sum} </h1>
            </div>
        );
    }
}


 // Create an <Adder> component. It should have a number <input> field and two <button>s, "Add" and "Total". When the "Add" button is pressed the number should be added to a list of numbers on screen. When the "Total" button is pressed the total of all the numbers in the list should be displayed.
export default Adder;

