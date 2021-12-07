import * as React from "react";

// eslint-disable-next-line no-unused-vars
type SetPlayerName = (index: number, e: React.FormEvent<HTMLInputElement>) => void;
// eslint-disable-next-line no-unused-vars
type DeletePlayer = (index: number) => void;

type Props = {
    name: string;
    setPlayerName: SetPlayerName;
    deletePlayer: DeletePlayer;
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
    </div>);
};

export default PlayerWriter;
