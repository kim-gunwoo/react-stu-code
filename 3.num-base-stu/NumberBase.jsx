import React, { Component, createRef } from "react";
import Try from "./Try";

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

class NumberBase extends Component {
    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        // this.state 생략
        const { value, tries, answer } = this.state;
        if (value === answer.join("")) {
            this.setState((prev) => {
                return {
                    result: "OK ",
                    tries: [...prev.tries, { try: value, result: "ok" }],
                };
            });
            alert("다시 시작");
            this.setState({
                value: "",
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split("").map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `실패 답은 ${answer.join(",")}`,
                });
                alert("다시 시작");
                this.setState({
                    value: "",
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prev) => {
                    return {
                        tries: [
                            ...prev.tries,
                            {
                                try: value,
                                result: `${strike} 스트라이크 , ${ball} 볼`,
                                value: "",
                            },
                        ],
                    };
                });
            }
        }
        this.inputRef.current.focus();
    };

    loop = [{ va: "li" }, { va: "lie" }, { va: "liw" }, { va: "lia" }];

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    inputRef = createRef();

    render() {
        return (
            <>
                <div>{this.state.result}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        maxLength={4}
                        ref={this.inputRef}
                        value={this.state.value}
                        onChange={this.onChangeInput}
                        //defaultValue={this.state.value}
                    />
                    <button>SUBMIT</button>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => (
                        <Try key={`${v + i} 차 시도`} tryInfo={v} />
                    ))}
                </ul>
                {/*
                    <ul>
                    {[
                        { va: "li" },
                        { va: "lie" },
                        { va: "liw" },
                        { va: "lia" },
                    ].map((v) => {
                        // 리액트에서 key 를 보고 같은 컴포넌트인지 파악을 함 필수로 입력해야함
                        return <li key={v.va}>{v.va}</li>;
                    })}
                </ul>
                <ul>
                    {[
                        { va: "li" },
                        { va: "lie" },
                        { va: "liw" },
                        { va: "lia" },
                    ].map((v) => (
                        <li>{v.va}</li>
                    ))}
                </ul>
                */}
            </>
        );
    }
}

//
// module.exports = {hello, 'a'}; 와 module.exports = 'a' 는 같다
// export const hello = "hello";
// import { hello }
// import NumberBase
export default NumberBase;
