import React, { Component } from "react";

const rspCoords = {
    R: "0",
    S: "-142px",
    P: "-284px",
};

const scores = {
    R: 1,
    S: 0,
    P: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

class RSP extends Component {
    state = {
        result: "",
        imgCoord: "0",
        score: 0,
    };

    interval;

    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100);
    }

    changeHand = () => {
        const { imgCoord } = this.state;
        if (imgCoord === rspCoords.R) {
            this.setState({
                imgCoord: rspCoords.S,
            });
        } else if (imgCoord === rspCoords.S) {
            this.setState({
                imgCoord: rspCoords.P,
            });
        } else if (imgCoord === rspCoords.P) {
            this.setState({
                imgCoord: rspCoords.R,
            });
        }
    };

    componentDidUpdate() {}

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => () => {
        clearInterval(this.interval);
        const { imgCoord } = this.state;
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            this.setState({
                result: "draw",
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prev) => {
                return {
                    result: "my win",
                    score: prev.score + 1,
                };
            });
        } else {
            this.setState((prev) => {
                return {
                    result: "com win",
                    score: prev.score - 1,
                };
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 2000);
    };

    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div
                    id="computer"
                    style={{
                        background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
                    }}
                />
                <div>
                    <button
                        id="rock"
                        className="btn"
                        //onClick={() => this.onClickBtn("R")}
                        onClick={this.onClickBtn("R")}
                    >
                        ROCK
                    </button>
                    <button
                        id="scissor"
                        className="btn"
                        onClick={this.onClickBtn("S")}
                    >
                        SCISSOR
                    </button>
                    <button
                        id="paper"
                        className="btn"
                        onClick={this.onClickBtn("P")}
                    >
                        PAPER
                    </button>
                </div>
                <div>{result}</div>
                <div>SCORE: {score}</div>
            </>
        );
    }
}

export default RSP;
