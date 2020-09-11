const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

import Numberbase from "./NumberBaseHooks";
//import Numberbase from "./RenderTest";

const Hot = hot(Numberbase);

ReactDom.render(<Hot />, document.querySelector("#root"));
