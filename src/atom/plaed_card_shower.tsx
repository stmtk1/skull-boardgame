import * as React from "react"
import * as ReactDOM from "react-dom"

const inputPlayers = ({ ternInfo }: { ternInfo: Player[] }) => {
    const count_flower = (player: Player) => player.cards.played.filter(card => card == "flower").length
    const count_skull = (player: Player) => player.cards.played.filter(card => card == "skull").length
    const show_player = (player: Player, index: number) => (<div key={index}>{player.name}: 花{count_flower(player)}枚,スカル{count_skull(player)}枚</div>)
    return (<div>{ternInfo.map(show_player)}</div>)
}

export default inputPlayers;
