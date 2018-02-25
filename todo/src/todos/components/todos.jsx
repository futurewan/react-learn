import React from "react";

import AddTodo from "./addTodo";
import TodoList from "./todoList";

export default () => {
    return (
        <div className="real-app">
            <div className="cover"></div>
            <div className="header">
                <h1>WTodo</h1>
            </div>
            <AddTodo />
            <TodoList />
        </div>
    );
};
