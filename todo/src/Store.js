import { createStore, combineReducers } from "redux";
import { reducer as todoReducer } from "./todos";
import { reducer as filterReducer } from "./filter";
import { initTodos,FilterTypes } from './constants';

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
});

console.log('store',initTodos)
const store = createStore(reducer,{
    todos:initTodos,
    filter:FilterTypes.ALL
});
export default store;
