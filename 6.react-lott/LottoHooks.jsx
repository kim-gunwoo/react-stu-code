import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    useCallback,
} from "react";
import BALL from "./Ball";

function getWinNumbers() {
    const candidate = Array(45)
        .fill()
        .map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(
            candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
        );
    }
    const bounusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bounusNumber];
}

const Lotto = () => {
    const lottoNumbsers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbsers] = useState(lottoNumbsers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);

    const timeouts = useRef([]);

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prev) => [...prev, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
    };

    useEffect(() => {
        runTimeouts();
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);

    const onClickRedo = useCallback(() => {
        setWinNumbsers(getWinNumbers());
        console.log(winNumbers);
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>Numbers</div>
            <div id="rslt">
                {winBalls.map((v) => (
                    <BALL key={v} number={v} />
                ))}
            </div>
            <div>Bonus</div>
            {bonus && <BALL number={bonus} />}
            {redo && <button onClick={onClickRedo}>ONE MORE</button>}
        </>
    );
};

export default Lotto;
