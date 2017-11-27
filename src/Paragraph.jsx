import React from "react";

const Paragraph = ({ children }) => (
    <main>
    	<p>
    		{ children }    
    	</p>
    </main>
);

Paragraph.defaultProps = {
	message: "Hello World!"
};

export default Paragraph;