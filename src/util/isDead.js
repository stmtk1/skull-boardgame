const isDead = player => {
    return player.cards.flower == 0 && player.cards.skull == 0
};

module.exports = isDead;
