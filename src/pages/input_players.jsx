import * as React from "react"
import * as ReactDOM from "react-dom"
import PlayerWriter from "../atom/player_writer"
import initState from "../state"

const inputPlayers = (props) => {
    const state = props.state;
    const setState = props.setState;
    const players = state.inputPlayers.players;
    const addPlayer = num => {
        const players = state.inputPlayers.players;
        if (players.length < num) {
            players.push("");
        } else {
            players.pop();
        }
        setState({...state, inputPlayers: {players: [...players]}});
    };
    const setPlayerName = (index, e) => {
        const name = e.target.value;
        const players = state.inputPlayers.players;
        players[index] = name;
        setState({...state, inputPlayers: {players: [...players]}});
    };

    const deletePlayer = (index) => {
        const players = state.inputPlayers.players;
        players.splice(index, 1);
        setState({...state, inputPlayers: {players: [...players]}});
    };

    const startGame = () => {
        const playerInfo = players.map((player) => ({name: player, cards: {flower: 3, skull: 1}}))
        setState({...state, mode: "chooseCard", playerInfo});
    }
    return (<div>
        <div>
            { players.length }人参加
            <button onClick={() => addPlayer(players.length + 1)}>+1</button>
        </div>
        {
            players.map((name, index) => <PlayerWriter key={index} name={name} index={index} setPlayerName={setPlayerName} deletePlayer={deletePlayer} />)
        }
        <button onClick={startGame}>開始する</button>
    </div>);
}

module.exports = inputPlayers;
