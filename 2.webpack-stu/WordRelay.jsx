const React = require("react");
const { Component } = React;
// React.Component -> Component 로 줄일수 있음
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState("가나다");
    const [wordValue, setWordValue] = useState("");
    const [result, setResult] = useState("");

    const inputRef = useRef(null);

    const onChange = (e) => {
        setWordValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === wordValue[0]) {
            setResult("OK !! ");
            setWord(wordValue);
            setWordValue("");
        } else {
            setResult("NO !! ");
            setWordValue("");
        }
        inputRef.current.focus();
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <label htmlFor="wordInput">글자를 입력하세요!!</label>
                <input
                    id="wordInput"
                    className="wordInput"
                    ref={inputRef}
                    type="text"
                    value={wordValue}
                    onChange={onChange}
                />
                <button>PUSH_Fun</button>
            </form>
            <div>{result}</div>
        </>
    );
};

/*
class WordRelay extends Component {
    state = {
        word: "가나다라",
        wordValue: "",
        result: "",
    };

    onChange = (e) => {
        this.setState({ wordValue: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.word[this.state.word.length - 1] ===
            this.state.wordValue[0]
        ) {
            this.setState({
                result: "ok",
                word: this.state.wordValue,
                wordValue: "",
            });
        } else {
            this.setState({
                result: "no",
                wordValue: "",
            });
        }
        this.input__.focus();
    };

    input__;

    onRefInput = (c) => {
        this.input__ = c;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={this.onRefInput}
                        type="text"
                        value={this.state.wordValue}
                        onChange={this.onChange}
                    />
                    <button>PUSH</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}
*/

module.exports = WordRelay;
