import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";

export default (previousState = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: action.id,
                    content: action.text,
                    completed: false
                },
                ...previousState
            ];
        case REMOVE_TODO:
            return previousState.filter(item => {
                return item.id !== action.id;
            });
        case TOGGLE_TODO:
            return previousState.map(item => {
                if (item.id === action.id) {
                    // console.log(item)
                    // const im = item;
                    // im.completed = !item.completed
                    // return im;
                    // console.log([...[3,5],1,2]) 
                    return Object.assign(item,{completed: !item.completed});
                } else {
                    return item;
                }
            });
        default:
            return previousState;
    }
};
