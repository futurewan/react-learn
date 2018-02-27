import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";
import { initTodos } from "../constants";

let nextTodoId = initTodos.length;
console.log("actions", nextTodoId);
export const addTodo = text => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
});
export const delTodo = id => ({
    type: REMOVE_TODO,
    id: id
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id
});
