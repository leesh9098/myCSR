import { createStore } from "redux";
import Prolog from "./stage/Prolog";
import Stage1 from "./stage/Stage1";
import Stage2 from "./stage/Stage2";

export const Stagenum = [
    <Prolog />,
    <Stage1 />,
    <Stage2 />
];

export default createStore((state, action) => {
    if (state === undefined) {
        return { stage: Stagenum[0], score: 0 }
    }

    if (action.type === 'CORRECT') {
        return { stage: Stagenum[action.stageLocation + 1], score: state.score + 10 }
    }

    if (action.type === 'INCORRECT') {
        return { stage: Stagenum[action.stageLocation + 1], score: state.score }
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());