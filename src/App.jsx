import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import SquareClick from "./states-challenges/SquareClick";
import People from "./People";
import Stuff from "./Stuff";
import Clicked from "./states-challenges/Clicked";
import ToggleText from "./states-challenges/ToggleText";
import Counter from "./states-challenges/Counter"
import StepCounter from "./states-challenges/StepCounter"
import CatchMeIfYouCan from "./states-challenges/CatchMeIfYouCan"


const App = () => (

    <div>
	    <Header>My Amazing App</Header>
	    <Paragraph>Awesome and totally original text goes here. Blah Blah Blah</Paragraph>
    	<People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    	<Stuff square = "true" />
    	<Clicked />
    	<SquareClick colour="hotpink" />
		<ToggleText initial="Hello" alternate="World" /> 
		<Counter max="100" />
		<StepCounter max="100" step="5" />
		<CatchMeIfYouCan jump="100" />
	</div>
);

export default App;

// <SquareClick colour="hotpink" />