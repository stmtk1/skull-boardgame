import { Player } from './player';
import * as React from "react";

interface State {
    mode: string;
    inputPlayers: {
        players: string[];
    };
    playerInfo: Player[];
    ternInfo: Player[];
    tern: number;
    challenge: {
        num: number;
        player: number;
        isFirst: boolean;
        selected: string;
    };
    result: {
        player: number;
    };
}

type SetState = React.Dispatch<React.SetStateAction<State>>;

export { State, SetState };
