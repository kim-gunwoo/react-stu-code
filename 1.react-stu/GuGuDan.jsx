const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
    // 구조분해할당
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [two, setTwo] = useState(Math.ceil(Math.random() * 9));
    const [inVal, setInVal] = useState("");
    const [rslt, setRslt] = useState("");
    const onRefInput = useRef(null);

    const onChange = (e) => {
        setInVal(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(inVal) === first * two) {
            setFirst(Math.ceil(Math.random() * 9));
            setTwo(Math.ceil(Math.random() * 9));
            setRslt("정답 " + inVal);
            setInVal("");
        } else {
            setRslt("땡");
            setInVal("");
        }
        onRefInput.current.focus();
    };

    return (
        <>
            <div>
                {first} * {two} = ?{" "}
            </div>
            <form onSubmit={onSubmit}>
                <input
                    ref={onRefInput}
                    type="number"
                    value={inVal}
                    onChange={onChange}
                />
                <button>Number</button>
            </form>
            <div>{rslt}</div>
        </>
    );
};

module.exports = GuGuDan;
