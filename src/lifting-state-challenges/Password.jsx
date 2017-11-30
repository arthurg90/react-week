import React from "react";

export default ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input className="password" onChange={ onChange } value={ value } />
    </div>
);

