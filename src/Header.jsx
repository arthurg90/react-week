import React from "react";

const Header = ({ children }) => (
    <header className="page-header">
        <h1>
        	{ children }
        </h1>
    </header>
);

export default Header;