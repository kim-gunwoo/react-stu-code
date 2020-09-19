import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import GameMatcher from "./GameMatcher";

const Game = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball">숫자야구</Link>
                &nbsp;
                <Link to="/game/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/game/lotto-generator">로또</Link>
                &nbsp;
                <Link to="/game/idx">Game</Link>
            </div>
            <div>
                <Switch>
                    {/*<Route path="/game/:name" component={GameMatcher} />*/}

                    <Route
                        exact
                        path="/"
                        render={(props) => <GameMatcher {...props} />}
                    />
                    <Route
                        path="/game/:name"
                        render={(props) => <GameMatcher {...props} />}
                    />
                </Switch>
            </div>
        </BrowserRouter>
        /*
        <HashRouter>
            <div>
                <Link to="/number-baseball">숫자야구</Link>
                &nbsp;
                <Link to="/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/lotto-generator">로또</Link>
            </div>
            <div>
                <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-generator" component={Lotto} />
            </div>
        </HashRouter>
        */
    );
};

export default Game;
