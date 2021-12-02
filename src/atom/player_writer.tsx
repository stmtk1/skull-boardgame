import * as React from "react"
import * as ReactDOM from "react-dom"

const PlayerWriter = ({name, setPlayerName, deletePlayer, index}) => {
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
