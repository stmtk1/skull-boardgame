import { State } from "./types/state";

const initState: State = {
    mode: "inputPlayers",
    inputPlayers: {
        players: [""],
    },
    playerInfo: [],
    ternInfo: [],
    tern: 0,
    challenge: {
        num: 0,
        player: -1,
        isFirst: true,
        selected: "0",
    },
    result: {
        player: 0,
    }
};

export default initState;
