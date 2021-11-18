import * as React from "react"
import * as ReactDOM from "react-dom"
import PlayerWriter from "../atom/player_writer"
import initState from "../state"

const chooseCard = (props) => {
    const state = props.state;
    const setState = props.setState;
    const playerInfo = state.playerInfo;
    return (<div>
        {playerInfo.map((player, index) => <div key={index}>{player.name}</div>)}
    </div>);
}

module.exports = chooseCard;
