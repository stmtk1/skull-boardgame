import * as React from "react"
import * as ReactDOM from "react-dom"
import PlayerWriter from "../atom/player_writer"

const inputPlayers = (props) => {
    const players = props.players;
    const addPlayer = props.addPlayer;
    const setPlayerName = props.setPlayerName;
    const deletePlayer = props.deletePlayer;
    return (<div>
        <div>
            { players.length }人参加
            <button onClick={() => addPlayer(players.length + 1)}>+1</button>
        </div>
        {
            players.map((name, index) => <PlayerWriter key={index} name={name} index={index} setPlayerName={setPlayerName} deletePlayer={deletePlayer} />)
        }
    </div>);
}

module.exports = inputPlayers;
