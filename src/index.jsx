import * as React from "react";
import * as ReactDOM from "react-dom";
import InputPlayers from "./pages/input_players";


const initState = {
    inputPlayers: {
        players: [""],
    },
};

const Index = () => {
    const [state, setState] = React.useState(initState);
    const addPlayer = num => {
        const players = state.inputPlayers.players;
        if (players.length < num) {
            players.push("");
        } else {
            players.pop();
        }
        setState({inputPlayers: {players: [...players]}});
    };
    const setPlayerName = (index, e) => {
        const name = e.target.value;
        const players = state.inputPlayers.players;
        players[index] = name;
        setState({inputPlayers: {players: [...players]}});
    };

    const deletePlayer = (index) => {
        const players = state.inputPlayers.players;
        players.splice(index, 1);
        setState({inputPlayers: {players: [...players]}});
    };
    return (<InputPlayers players={state.inputPlayers.players} addPlayer={addPlayer} setPlayerName={setPlayerName} deletePlayer={deletePlayer} />);
}

ReactDOM.render(<Index />, document.getElementById("react"));
