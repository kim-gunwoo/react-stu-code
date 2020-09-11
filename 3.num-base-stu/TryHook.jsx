import React, { Component, memo, useState } from "react";

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
// props 값은 바꾸지 않으며 state안에 담아서 바꾼다
const Try = memo(({ tryInfo }) => {
    const [result, setResult] = useState(tryInfo.result);

    const onClick = () => {
        setResult("1");
    };
    return (
        <li>
            <div>{tryInfo.try} </div>
            <div onClick={onClick}>{tryInfo.result} </div>
        </li>
    );
});

export default Try;
