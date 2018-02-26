import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes';

export default (previousState = [],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                {
                    id: action.id,
                    content: action.text,
                    completed: false
                },
                ...previousState
            ]
        default :
            return previousState;
    }
}