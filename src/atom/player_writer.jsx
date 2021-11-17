import * as React from "react"
import * as ReactDOM from "react-dom"

const PlayerWriter = (props) => {
    const name = props.name;
    const setPlayerName = props.setPlayerName;
    const deletePlayer = props.deletePlayer;
    const index = props.index;
    return (<div>
        <input
            type="input"
            placeholder="名前を入力してください"
            type="input"
            value={ name }
            onInput={(e) => setPlayerName(index, e)}
        />
        <button onClick={() => deletePlayer(index) }>削除</button>
    </div>)
};

module.exports = PlayerWriter;
