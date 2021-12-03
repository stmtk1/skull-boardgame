import * as React from "react"
import * as ReactDOM from "react-dom"
import PlayerWriter from "../atom/player_writer"
import initState from "../state"
import SetState from "../types/react"

const inputPlayers = ({state, setState}: {state: State; setState: SetState}) => {
    const players = state.inputPlayers.players;
    const addPlayer = (num: number) => {
        const players = state.inputPlayers.players;
        if (players.length < num) {
            players.push("");
        } else {
            players.pop();
        }
        setState({...state, inputPlayers: {players: [...players]}});
    };
    const setPlayerName = (index: number, e: React.FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        const name = e.target.value;
        const players = state.inputPlayers.players;
        players[index] = name;
        setState({...state, inputPlayers: {players: [...players]}});
    };

    const deletePlayer = (index: number) => {
        const players = state.inputPlayers.players;
        players.splice(index, 1);
        setState({...state, inputPlayers: {players: [...players]}});
    };

    const startGame = () => {
        const playerInfo = players.map((player: string): Player => ({name: player, win: 0,cards: {flower: 3, skull: 1, played: []}}))
        const ternInfo = players.map((player: string): Player => ({name: player, win: 0, cards: {flower: 3, skull: 1, played: []}}))
        setState({...state, mode: "chooseCard", playerInfo, ternInfo});
    }
    return (<div>
        <div>
            { players.length }人参加
            <button onClick={() => addPlayer(players.length + 1)}>+1</button>
        </div>
        {
            players.map((name: string, index: number) => <PlayerWriter key={index} name={name} index={index} setPlayerName={setPlayerName} deletePlayer={deletePlayer} />)
        }
        <button onClick={startGame}>開始する</button>
    </div>);
}

export default inputPlayers;
