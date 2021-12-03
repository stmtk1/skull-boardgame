import * as React from "react";
import * as ReactDOM from "react-dom";
import InputPlayers from "./pages/input_players";
import ChooseCard from "./pages/choose_card";
import Challenge from "./pages/challenge";
import Result from "./pages/result";
import initState from "./state"

const Index = () => {
    const [state, setState] = React.useState(initState);
    if (state.mode == "inputPlayers") {
        return <InputPlayers state={state} setState={setState} />;
    } else if(state.mode == "chooseCard") {
        return <ChooseCard state={state} setState={setState} />;
    } else if(state.mode == "challenge") {
        return <Challenge state={state} setState={setState} />;
    } else if(state.mode == "result") {
        return <Result state={state} setState={setState} />;
    } else {
        return <h1>internal server error</h1>;
    }
}

ReactDOM.render(<Index />, document.getElementById("react"));
