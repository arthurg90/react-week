import React from "react";

export default ({ name, selected, onClick }) => (
    <button
        className={ "btn " + (selected ? "btn-danger" : "btn-primary") }
        onClick={ onClick }
    >
        { name }
    </button>
);