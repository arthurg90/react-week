import React from "react";

const Square = ({ colour }) => (		//grabs the colour value from the Content component
    <div style={{ background: colour, width: "200px", height: "200px" }}>
    </div>
);

Square.defaultProps = {
	colour: "blue"			//if no "colour" value passed from Content - default to blue 
};


export default Square;