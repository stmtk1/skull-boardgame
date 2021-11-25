import * as React from "react"
import * as ReactDOM from "react-dom"
import {cloneDeep} from "lodash"
import Select from "../atom/select"

const Challenge = ({state, setState}) => {
    const end = state.ternInfo.map(player => player.cards.played.length).reduce((a, b) => a + b);
    const start = state.challenge.num;
    const options = new Array(end - start).fill(null).map((_, i) => i + 1 + start).map(i => ({ text: i.toString(), value: i }));
    const selectChallenge = (e) => {
        const challenge = state.challenge;
        challenge.selected = e.target.value;
        setState({...state, challenge});
    };
    const player = state.ternInfo[state.tern];
    const finishChallenge = () => {
        const challenge = {
            selected: 0,
            player: state.tern,
            isFirst: true,
            num: 0,
        }
        const playerIndex = state.challenge.player;
        const playerInfo = state.playerInfo; 
        const includeSkull = state.ternInfo.map(player => player.cards.played.includes("skull")).reduce((a, b) => a || b);
        if (includeSkull) {
            const info = playerInfo[playerIndex];
            const lostFlower = Math.random() * (info.cards.flower + info.cards.skull) < info.cards.flower;
            if (lostFlower) {
                info.cards = {flower: info.cards.flower - 1, skull: info.cards.skull, played: []};
                playerInfo[playerIndex] = info;
            } else {
                player.cards = {flower: info.cards.flower, skull: info.cards.skull - 1, played: []};
                playerInfo[playerIndex] = info;
            }
            state.mode = "chooseCard";
        } else {
            const info = playerInfo[playerIndex];
            info.win += 1;
            state.mode = "chooseCard";
            if (info.win >= 2) {
                state.mode = "result";
                console.log(playerIndex);
                state.result = { player: state.tern };
            }
            playerInfo[playerIndex] = info;
        }
        const ternInfo = cloneDeep(playerInfo);
        setState({...state, ternInfo, playerInfo, challenge, tern: 0});
    };
    const addChallenge = () => {
        const prev = state.challenge;
        const selected = parseInt(prev.selected);
        if (selected == end) {
            finishChallenge();
            return;
        }
        const challenge = {
            selected: 0,
            player: state.tern,
            isFirst: false,
            num: selected,
        }
        const tern = (state.tern + 1) % state.ternInfo.length;
        setState({...state, challenge, tern});
    }
    const pass = () => {
        const tern = (state.tern + 1) % state.ternInfo.length;
        if (state.tern == state.challenge.player) {
            finishChallenge();
        } else {
            setState({ ...state, tern });
        }
    }
    const forms = [
        <div key={1}>{player.name}さんの番です</div>,
        <Select key={2} options={[{text: "初期値", value: 0}, ...options]} onChange={selectChallenge} value={state.challenge.selected} />,
        <button key={3} onClick={addChallenge} disabled={state.challenge.selected == 0}>チャレンジ上乗せ</button>,
    ]

    if (!state.challenge.isFirst) {
        forms.push(<button key={4} onClick={pass}>パス</button>);
    }

    return (<div>{forms}</div>);
}

module.exports = Challenge;
