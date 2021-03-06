// state exercise
// ---------------------------------------------------------------------------------------------------------------
// import React from "react";
// import Header from "./Header";
// import Paragraph from "./Paragraph";
// import SquareClick from "./states-challenges/SquareClick";
// import People from "./People";
// import Stuff from "./Stuff";
// import Clicked from "./states-challenges/Clicked";
// import ToggleText from "./states-challenges/ToggleText";
// import Counter from "./states-challenges/Counter"
// import StepCounter from "./states-challenges/StepCounter"
// import CatchMeIfYouCan from "./states-challenges/CatchMeIfYouCan"


// const App = () => (

//     <div>
// 	    <Header>My Amazing App</Header>
// 	    <Paragraph>Awesome and totally original text goes here. Blah Blah Blah</Paragraph>
//     	<People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
//     	<Stuff square = "true" />
//     	<Clicked />
//     	<SquareClick colour="hotpink" />
// 		<ToggleText initial="Hello" alternate="World" /> 
// 		<Counter max="100" />
// 		<StepCounter max="100" step="5" />
// 		<CatchMeIfYouCan jump="100" />
// 	</div>
// );

// export default App;

// forms Exertcises
// ------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import Length from "./forms-challenges/Length";
// import List	from "./forms-challenges/List";
// import Adder from "./forms-challenges/Adder";
// import TempConverter from "./forms-challenges/TempConverter"


// const App = () => (
//     <div>
// 	    <Length />
// 	    <List />
// 	    <Adder />
// 	    <TempConverter />
// 	</div>
// );

// export default App;



// Lifting states
// ------------------------------------------------------------------------------------------------------------------

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { Link } from "react-router-dom";

import Header from "./lifting-state-challenges/Header";
import Buttons from "./lifting-state-challenges/Buttons";
import Squares from "./lifting-state-challenges/Squares";
import Form from "./lifting-state-challenges/Form"
import Links from "./react-router/Links"
import FourOhFour from "./react-router/FourOhFour"
import StepCounter from "./states-challenges/StepCounter";
import Signup from "./lifting-state-challenges/Signup"


const App = () => (
	<Router>
		<div>
			<Switch>
			   <Route exact path="/" component={ Header }/>	 
			   <Route path="/buttons" component={ Buttons }/>
			   <Route exact path="/squares" component={ Squares }/>
			   <Route exact path="/squares/:colour" render={ ({ match }) => (
    <Squares colour={ match.params.colour } /> )} />	
			   <Route exact path="/steps" component={ StepCounter }/>
			   <Route exact path="/steps/:step/:max" render={ ({ match }) => (
    <StepCounter step={ match.params.step } max={ match.params.max } /> )} />	 
			   <Route path="/form" component={ Form }/>
			   <Route component={ FourOhFour }/>
			</Switch>  
			<br />
		    <Signup minimumLength={ 12 } />
		    <Links />

		</div>

	</Router>
);

export default App; 


