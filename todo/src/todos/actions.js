import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes';
import {initTodos} from '../constants'

let nextTodoId = initTodos.length;
console.log('actions',nextTodoId)
const addTodo = (text)=>({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text: text
})
export {
    addTodo
}