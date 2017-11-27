import React from 'react';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";



const Stuff = ({ square }) => (
    <div>
      <Header />          
      <Paragraph />
      { square ? <Square /> : "No Squares here" }
      <People />
    </div>  
);

Stuff.defaultProps = {
	square: "true"
};

export default Stuff;
