import React, { Component } from "react";

class ResponceCheck extends Component {
    state = {
        state: "waiting",
        message: "클릭해서 시작",
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === "waiting") {
            this.setState({
                state: "ready",
                message: "초록색이 되면 클릭",
            });

            this.timeout = setTimeout(() => {
                this.setState({
                    state: "now",
                    message: "지금 클릭",
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === "ready") {
            clearTimeout(this.timeout);
            this.setState({
                state: "waiting",
                message: "초록색이 된 후 에 클릭",
            });
        } else if (state === "now") {
            this.endTime = new Date();
            this.setState((prev) => {
                return {
                    state: "waiting",
                    message: "클릭해서 시작",
                    result: [...prev.result, this.endTime - this.startTime],
                };
            });
        }
    };

    onReset = () => {
        this.setState({
            result: [],
        });
    };

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 ? null : (
            <>
                <div>
                    평균시간{" "}
                    {this.state.result.reduce((a, c) => a + c) /
                        this.state.result.length}
                    ms
                </div>
                <div>
                    <button onClick={this.onReset}>RESET</button>
                </div>
            </>
        );
    };

    render() {
        return (
            <>
                <div
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponceCheck;
