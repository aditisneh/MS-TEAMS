import React from 'react'
import Motion from "./Motion";

const OtherComponent = () => {
    return (
        <h1>Other</h1>
    );
};

const Other = Motion(OtherComponent);
export default Other;