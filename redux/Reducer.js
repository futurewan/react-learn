import * as ActionTypes from "./ActionTypes";

export default (previousState, action) => {
    const { counterCaption } = action;
    const newState = Object.assign({}, previousState);
    switch (action.type) {
        case ActionTypes.INCREMENT:
            newState[counterCaption]++;
            return newState;
        case ActionTypes.DECREMENT:
            newState[counterCaption]--;
            return newState;
        default:
            return previousState;
    }
};
