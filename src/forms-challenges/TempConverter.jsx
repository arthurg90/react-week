// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.
import React, { Component } from "react";

class TempConverter extends Component {

    constructor(props) {
        super(props);
        // setup our state
        this.state = { celsius: 0, fahrenheit: 0 };        				 //store the initial 2 states for c and f
        this.update = this.update.bind(this);			//bind the events handlers to the states
        this.onKeyUpCtoF = this.onKeyUpCtoF.bind(this);
        this.onKeyUpFtoC = this.onKeyUpFtoC.bind(this);
    }

update(e) {
	this.setState({ celsius: +e.target.value });
	this.setState({ fahrenheit: +e.target.value })
}

onKeyUpCtoF(e) {
	let current = this.state.value;
	this.setState({celsius: current * 1.8 + 32}) // need two events for ctof and ftoc to track changes 
	this.setState({fahrenheit: (current - 32)*.5556 })
} 

onKeyUpFtoC(e) {
	let current = this.state.value;
	this.setState({fahrenheit: (current - 32)*.5556 })
	this.setState({celsius: current * 1.8 + 32})
}



    render() {
        return (
            <div className="form-group">
                <label>°C</label>
            	<input onKeyUp={ this.onKeyUpCtoF } onChange={ this.update. } className="form-control" type="number"/>
                <label>°F</label>
            	<input onKeyUp={ this.onKeyUpFtoC } onChange={ this.update } className="form-control" type="number"/>
            </div>
        );
    }
}

export default TempConverter;




// TestOne:
//https://reactjs.org/docs/lifting-state-up.html (check this)
// Create a <TempConverter> component. It should have a °F and °C <input>. When you type a number into one <input> it should update the value in the other.
// import React, { Component } from "react";

// class TempConverter extends Component {

//     constructor(props) {
//         super(props);
//         // setup our state
//         this.state = { value: 0 };        				 //store the initial states
//         this.update = this.update.bind(this);			//bind the events handlers to the states
//         this.onKeyUpCtoF = this.onKeyUpCtoF.bind(this);
//         this.onKeyUpFtoC = this.onKeyUpFtoC.bind(this);
//     }

// update(e) {
// 	this.setState({ value: +e.target.value });
// }

// onKeyUpCtoF(e) {
// 	let current = this.state.value;
// 	this.setState({value: current * 1.8 + 32})
// } 

// onKeyUpFtoC(e) {
// 	let current = this.state.value;
// 	this.setState({value: (current - 32)*.5556 })
// }



//     render() {
//         return (
//             <div className="form-group">
//                 <label>°C</label>
//             	<input onKeyUp={ this.onKeyUpCtoF } onChange={ this.update } className="form-control" type="number"/>
//                 <label>°F</label>
//             	<input onKeyUp={ this.onKeyUpFtoC } onChange={ this.update } className="form-control" type="number"/>
//             </div>
//         );
//     }
// }

// export default TempConverter;
