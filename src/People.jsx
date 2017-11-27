import React from "react";

// we use className to add classes for Bootstrap styling
// let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({ names }) => (
   <ul className="peeps">
   		{ names ? names.map(i => (
   			<li key={ i }>{[i]}
   			</li>
   		))  : "Nothing to see here" }
   </ul>


);

export default People;



