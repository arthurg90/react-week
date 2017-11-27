import React from "react";

// props are passed in as an object as the first argument to our component
const Figure = ({ caption, src }) => (
    <figure className="panel panel-default">
        <div className="panel-body">
            <img className="img-thumbnail" alt={ caption } src={ src } />
        </div>
        <figcaption className="panel-footer">{ caption }</figcaption>
    </figure>
);

export default Figure;

