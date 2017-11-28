// import React, { Component } from "react";

// class Clicked extends Component {
//     clicked() {
//     	<h1>Click Box</h1>;
//     }

//     render() {
//         return (
//             <div className="jumbotron" onClick={ this.clicked }>
//                 <h1>Not Clicked</h1>
//             </div>
//         );
//     }
// }

// export default Clicked;



import React, { Component } from "react";

class Clicked extends Component {
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
        return (
            <div className="jumbotron" onClick={ this.clicked }>
                {this.state.value ? <h1>Not Clicked</h1> : <h1>Clicked</h1> }
            </div>
        );

        
    }
}

export default Clicked;

