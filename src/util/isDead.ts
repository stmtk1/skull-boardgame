import { Player } from "../types/player";

const isDead = (player: Player): boolean => {
    return player.cards.flower == 0 && player.cards.skull == 0;
};

export default isDead;
