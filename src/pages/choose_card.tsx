import * as React from "react"
import * as ReactDOM from "react-dom"
import PlayerWriter from "../atom/player_writer"
import PlayedCardShower from "../atom/plaed_card_shower"
import isDead from "../util/isDead"
import initState from "../state"
import SetState from "../types/react"

const chooseCard = ({state, setState}: {state: State; setState: SetState}) => {
    const ternInfo = state.ternInfo;
    const player = ternInfo[state.tern];
    const useFlower = () => {
        player.cards.flower -= 1;
        player.cards.played.push("flower");
        ternInfo[state.tern] = player;
        const tern = (state.tern + 1) % ternInfo.length;
        setState({...state, ternInfo, tern});
    };
    const useSkull = () => {
        player.cards.skull -= 1;
        player.cards.played.push("skull");
        ternInfo[state.tern] = player;
        const tern = (state.tern + 1) % ternInfo.length;
        setState({...state, ternInfo, tern});
    };
    const challenge = () => {
        setState({...state, mode: "challenge"});
    }
    const skip = () => {
        setState({...state, tern: (state.tern + 1) % ternInfo.length})
    }
    const canChallenge = ternInfo.filter((p, i) => !isDead(state.playerInfo[i]) && p.cards.played.length == 0).length == 0;
    const buttonInfo = [
        {text: "花を出す", func: useFlower, valid: player.cards.flower > 0},
        {text: "スカルを出す", func: useSkull, valid: player.cards.skull > 0},
        {text: "チャレンジ", func: challenge, valid: canChallenge},
    ];
    if (state.playerInfo[state.tern].cards.flower == 0 && state.playerInfo[state.tern].cards.skull == 0) {
        return (<div>
            <div>{player.name}さんは手札がないのでスキップされます</div>
            <button onClick={skip}>スキップ</button>
        </div>)
    }
    const validButton = buttonInfo.filter(button => button.valid)
    return (<div>
        <div>{player.name}さんの番です</div>
        <div>花{player.cards.flower}枚</div>
        <div>スカル{player.cards.skull}枚</div>
        <div>なにをしますか？</div>
        <div>
            {validButton.map((b, index) => <button key={index} onClick={b.func}>{b.text}</button>)}
        </div>
        <PlayedCardShower ternInfo={ternInfo} />
    </div>);
}

export default chooseCard;
