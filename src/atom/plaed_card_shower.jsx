import * as React from "react"
import * as ReactDOM from "react-dom"

const inputPlayers = ({ternInfo}) => {
    const count_flower = (player) => player.cards.played.filter(card => card == "flower").length
    const count_skull = (player) => player.cards.played.filter(card => card == "skull").length
    const show_player = (player, index) => (<div key={index}>{player.name}: 花{count_flower(player)}枚,スカル{count_skull(player)}枚</div>)
    return (<div>{ternInfo.map(show_player)}</div>)
}

module.exports = inputPlayers;
