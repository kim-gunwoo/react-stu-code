import React, { Component } from "react";
import NumberBaseball from "../3.num-base-stu/NumberBase";
import RSP from "../5.react-rsp/RSP";
import Lotto from "../6.react-lott/Lotto";

// 라우터 지정했을 경우
//export default
class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(
            this.props.location.search.slice(1)
        );
        //console.log(urlSearchParams.get("hello"));

        if (this.props.match.params.name === "number-baseball") {
            return <NumberBaseball />;
        } else if (this.props.match.params.name === "rock-scissors-paper") {
            return <RSP />;
        } else if (this.props.match.params.name === "lotto-generator") {
            return <Lotto />;
        }
        return <div>NO GAM</div>;
    }
}

// withRouter 사용시 : 라우터를 따로 지정하지 않음
/*
import { withRouter } from "react-router-dom";

class GameMatcher extends Component {
    render() {
        return <div>GameMatcher</div>;
    }
}
export default withRouter(GameMatcher);
*/

export default GameMatcher;
