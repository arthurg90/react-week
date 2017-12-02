import React from "react";

export default ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input type="password" className="form-control" onChange={ onChange } value={ value } style={{borderColor: value.length < 12 ? "red" : "grey" }} />
    </div>
);

