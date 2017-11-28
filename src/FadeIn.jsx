import React from "react";

const FadeIn = ({ children }) => (
	<div>    
    	<FadeIn time="500ms">
    		{ children }
    	</FadeIn> 
    </div>	
);



export default FadeIn;

