import * as React from "react";
import { State } from "../types/state";

const Challenge = ({ state }: { state: State; }) => {
    return (<h1>{state.playerInfo[state.result.player].name}の勝ち</h1>);
};

export default Challenge;
