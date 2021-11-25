import * as React from "react"
import * as ReactDOM from "react-dom"

const Challenge = ({state, setState}) => {
    return (<h1>{state.playerInfo[state.result.player].name}の勝ち</h1>);
}

module.exports = Challenge;
