import React, { useState } from "react";
import TryHook from "./TryHook";

function getNumbers() {
    // 숫자 4개를 랜덤으로 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.random() * (9 - i), 1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseHook = () => {
    const [result, setResult] = useState("");
    const [value, setValue] = useState("");
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (value === answer.join("")) {
            setResult("OK ");
            setTries((prev) => {
                return [...prev, { try: value, result: "ok" }];
            });
            alert("다시 시작");
            setValue("");
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`실패 답 은 ${answer.join(",")}`);
                alert("다시 시작");
                setValue("");
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prev) => {
                    return [
                        ...prev,
                        {
                            try: value,
                            result: `${strike} 스트라이크 , ${ball} 볼`,
                            value: "",
                        },
                    ];
                });
            }
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{result}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    maxLength={4}
                    value={value}
                    onChange={onChangeInput}
                    //defaultValue={value}
                />
                <button>SUBMIT</button>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {tries.map((v, i) => (
                    <TryHook key={`${v + i} 차 시도`} tryInfo={v} />
                ))}
            </ul>
        </>
    );
};

export default NumberBaseHook;
