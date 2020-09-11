const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

import ResponceCheck from "./ResponceCheckHooks";

const Hot = hot(ResponceCheck);

ReactDom.render(<Hot />, document.querySelector("#root"));
