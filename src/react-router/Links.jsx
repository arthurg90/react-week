import React from "react";
import { Link } from "react-router-dom";


export default () => (
	<div className = "nav">
 		<h1>Navigation Links</h1>
		   <ul>
		       <li><Link to="/">Home</Link></li>
		       <li><Link to="/buttons">Buttons</Link></li>
		       <li><Link to="/squares/yellow">Squares</Link></li>
		       <li><Link to="/steps/5/100">Step Counter</Link></li>
		       <li><Link to="/form">Form</Link></li>
		   </ul>
	</div>
 
);
