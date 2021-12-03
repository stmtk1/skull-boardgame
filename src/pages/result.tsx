import * as React from "react"
import * as ReactDOM from "react-dom"
import SetState from "../types/react"

const Challenge = ({state, setState}: {state: State; setState: SetState}) => {
    return (<h1>{state.playerInfo[state.result.player].name}の勝ち</h1>);
}

export default Challenge;
