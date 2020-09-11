import React, { Component } from "react";
import React, { PureComponent } from "react";

/*
class Test extends Component {
    state = {
        counter: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextCoutext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log("Rendering ~~~~");
        return (
            <>
                <button onClick={this.onClick}>CLICK</button>
            </>
        );
    }
}
*/

class Test extends PureComponent {
    state = {
        counter: 0,
    };

    onClick = () => {
        this.setState({});
    };

    render() {
        console.log("Rendering ~~~~");
        return (
            <>
                <button onClick={this.onClick}>CLICK</button>
            </>
        );
    }
}

export default Test;
