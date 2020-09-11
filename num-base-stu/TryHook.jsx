import React, { Component, memo } from "react";

// props
// props.tryInfo -> {tryInfo}
/*
const Try = ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try} </div>
            <div>{tryInfo.result} </div>
        </li>
    );
};
*/

const Try = memo(({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try} </div>
            <div>{tryInfo.result} </div>
        </li>
    );
});

export default Try;
