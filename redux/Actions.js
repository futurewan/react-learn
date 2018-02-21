import * as ActionTypes from "./ActionTypes";

const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};
const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};

export {
    increment,
    decrement
}
