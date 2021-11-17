import * as React from "react";
import * as ReactDOM from "react-dom";
import InputPlayers from "./input_players";


const initState = {
    inputPlayers: {
        players: [""],
    },
};

const Index = () => {
    const [state, setState] = React.useState(initState);
    const setPlayerNumber = num => {
        const players = state.inputPlayers.players;
        if (players.length < num) {
            players.push("");
        } else {
            players.pop();
        }
        setState({inputPlayers: {players: [...players]}})
    };
    const setPlayerName = (index, e) => {
        const name = e.target.value;
        const players = state.inputPlayers.players;
        players[index] = name;
        setState({inputPlayers: {players: [...players]}})
    };
    return (<InputPlayers players={state.inputPlayers.players} setPlayerNumber={setPlayerNumber} setPlayerName={setPlayerName} />);
}

ReactDOM.render(<Index />, document.getElementById("react"));
