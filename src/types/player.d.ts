export interface Player {
    name: string;
    win: number;
    cards: {
        flower: number;
        skull: number;
        played: ("skull" | "flower")[];
    };
}
