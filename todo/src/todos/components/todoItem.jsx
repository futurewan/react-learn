import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

class TodoItem extends React.Component{
    render(){
        const {completed,content,deleteTodo,toggleTodo} = this.props;
        let itemCls = classNames('todo-item',{
            completed:completed
        })
        return(
            <div className={itemCls}>
                <input type="checkbox" className="toggle" onClick={toggleTodo} />
                <label>{content}</label>
                <button className="destory" onClick={deleteTodo}></button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    content:propTypes.string.isRequired,
    completed:propTypes.bool.isRequired,
    deleteTodo:propTypes.func.isRequired,
    toggleTodo:propTypes.func.isRequired
}
export default TodoItem;