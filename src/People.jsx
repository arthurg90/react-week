import React from "react";

// we use className to add classes for Bootstrap styling
let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
   <ul className="peeps">
   		{ names.map(i => (
   			<li key={ i }>{[i]}
   			</li>
   		))}

   </ul>

);

export default People;