import React from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Stuff from "./Stuff";

const App = () => (
    <div>
	    <Header>My Amazing App</Header>
	    <Paragraph>Awesome and totally original text goes here. Blah Blah Blah</Paragraph>
    	<Square colour="red" />
    	<People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    	<Stuff square = "true" />
	</div>
);

export default App;
