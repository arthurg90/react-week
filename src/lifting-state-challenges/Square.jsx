// Create a component <Squares> that displays two of your <Square> components. The first <Square>s border colour should always be the opposite of the second one. (You will need to change your <Square> component, so make sure you've got a copy of your original - or use Git)

import React from "react";

export default ({ selected, onClick, colour }) => (
    <div 
    onClick={ onClick } 
    style={{ background: colour, width: "200px", height: "200px", border: "2px solid", borderColor: selected ? "red" : "black" }}
    >
    </div>

);

