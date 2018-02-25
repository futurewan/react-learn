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
        case ActionTypes.DOUBLE:
            for(const key in newState){
                if(newState.hasOwnProperty(key)){
                    newState[key]*=2;
                }
            }
            return newState;
        default:
            return previousState;
    }
};
