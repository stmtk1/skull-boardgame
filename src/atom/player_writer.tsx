import * as React from "react"
import * as ReactDOM from "react-dom"

type Props = {
    name: string;
    setPlayerName: (index: number, e: React.FormEvent<HTMLInputElement>) => void;
    deletePlayer: (index: number) => void;
    index: number;
    };

const PlayerWriter = ({name, setPlayerName, deletePlayer, index}: Props) => {
    return (<div>
        <input
            type="input"
            placeholder="名前を入力してください"
            value={ name }
            onInput={(e) => setPlayerName(index, e)}
        />
        <button onClick={() => deletePlayer(index) }>削除</button>
    </div>)
};

export default PlayerWriter;
