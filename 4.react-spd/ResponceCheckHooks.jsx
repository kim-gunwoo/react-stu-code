import React, { useState, useRef } from "react";
import LoopI from "./LoopI";

const ResponceCheck = () => {
    const [state, setstate] = useState("waiting");
    const [message, setmessage] = useState("클릭해서 시작!!");
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === "waiting") {
            setstate("ready");
            setmessage("초록이가 되면 클릭!!");
            timeout.current = setTimeout(() => {
                setstate("now");
                setmessage("이때다 클릭!!");
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === "ready") {
            clearTimeout(timeout.current);
            setstate("waiting");
            setmessage("초록색이 된 후 에 클릭");
        } else if (state === "now") {
            endTime.current = new Date();
            setstate("waiting");
            setmessage("클릭해서 시작");
            setResult((prev) => {
                return [...prev, endTime.current - startTime.current];
            });
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0 ? null : (
            <>
                <div>
                    평균시간 {result.reduce((a, c) => a + c) / result.length}
                    ms
                </div>
                <div>
                    <button onClick={onReset}>RESET</button>
                </div>
                <div>
                    <ul>
                        {result.map((v, i) => (
                            <LoopI key={`${v + i}`} loopInfo={v} />
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponceCheck;
