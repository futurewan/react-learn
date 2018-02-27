import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import TodoItem from "./todoItem";
import { FilterTypes } from "../../constants";
import * as actions from '../actions';

class TodoList extends React.Component {
    render() {
        const { todos, deleteTodo, toggleTodo } = this.props;
        return (
            <div>
                {todos.map(item => (
                    <TodoItem
                        key={item.id}
                        content={item.content}
                        completed={item.completed}
                        deleteTodo={() => deleteTodo(item.id)}
                        toggleTodo={() => toggleTodo(item.id)}
                    />
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: propTypes.array.isRequired
};

const getVisibileTodos = (todos, filter) => {
    console.log(filter)
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error("unsupported filter");
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibileTodos(state.todos, state.filter)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => {
            dispatch(actions.delTodo(id))
        },
        toggleTodo: id => {
            dispatch(actions.toggleTodo(id))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
