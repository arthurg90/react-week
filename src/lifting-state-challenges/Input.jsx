import React from "react";

export default ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input className="form-control" onChange={ onChange } value={ value } />
        <p className="help-block">Length: { value.length } characters</p>
    </div>
);

