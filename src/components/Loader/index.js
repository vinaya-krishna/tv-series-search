import React from "react";
import loaderSrc from "../../assets/25.gif";

const Loader = props => (
    <div>
        <img 
            src={loaderSrc} 
            alt="Loading"
            style={{width: 50}}
        />
    </div>
);

export default Loader;