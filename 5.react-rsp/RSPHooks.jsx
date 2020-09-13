import React, { useState, useRef, useEffect } from "react";

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

const RSPHooks = () => {
    const [result, setResult] = useState("");
    const [imgCoord, setImgCoord] = useState(rspCoords.R);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {
        // componentDidMount, componentDidUpdate 의 역할
        interval.current = setInterval(changeHand, 100);
        return () => {
            // componentWillUnmount 의 역할
            clearInterval(interval.current);
        };
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.R) {
            setImgCoord(rspCoords.S);
        } else if (imgCoord === rspCoords.S) {
            setImgCoord(rspCoords.P);
        } else if (imgCoord === rspCoords.P) {
            setImgCoord(rspCoords.R);
        }
    };

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
            setResult("Draw");
        } else if ([-1, 2].includes(diff)) {
            setResult("user win");
            setScore((prev) => {
                return prev + 1;
            });
        } else {
            setResult("com win");
            setScore((prev) => {
                return prev - 1;
            });
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 2000);
    };

    return (
        <>
            <div
                id="computer"
                style={{
                    background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
                }}
            />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn("R")}>
                    ROCK
                </button>
                <button id="scissor" className="btn" onClick={onClickBtn("S")}>
                    SCISSOR
                </button>
                <button id="paper" className="btn" onClick={onClickBtn("P")}>
                    PAPER
                </button>
            </div>
            <div>{result}</div>
            <div>SCORE: {score}</div>
        </>
    );
};

export default RSPHooks;
