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
