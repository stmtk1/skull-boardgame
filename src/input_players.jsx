import * as React from "react"
import * as ReactDOM from "react-dom"

const inputPlayers = (props) => {
    const players = props.players;
    const setPlayerNumber = props.setPlayerNumber;
    const setPlayerName = props.setPlayerName;
    // console.log(props)
    return (<div>
        <div>
            <button onClick={() => setPlayerNumber(players.length - 1)}>-1</button>
            { players.length }
            <button onClick={() => setPlayerNumber(players.length + 1)}>+1</button>
        </div>
        {
            players.map((name, index) => 
                <div key={index}><input type="input" placeholder="名前を入力してください" type="input" value={ name } onInput={(e) => setPlayerName(index, e)} /></div>)
        }
    </div>);
}

module.exports = inputPlayers;
