import React from 'react';
import {connect} from 'react-redux';
import '../filter.less';
import classNames from 'classnames';

import {FilterTypes} from '../../constants.js';
import { setFilter } from '../actions';
import { clearCompletedTodo } from '../../todos/actions';

class Filter extends React.Component{
    render(){
        const {filter,toggleFilter,clearCompleted,unCompletedL} = this.props;
        return(
            <div className="helper">
                <span className="left"> {unCompletedL}item left</span>
                <span className="tabs">
                    {
                        Object.entries(FilterTypes).map((state)=>{
                            return (
                                <span 
                                    key={state[0]}
                                    className={classNames({
                                            'actived':filter === state[1]
                                        })}
                                    onClick={()=>toggleFilter(state[1])}
                                >
                                    {state[1]}
                                </span>
                            )
                        })
                    }
                </span>
                <span className="clear" onClick={clearCompleted}>clear completed</span>
            </div>
        )
    }
}
const mapStateToProps = state=>{

    console.log(state)
    return {
        filter:state.filter,
        unCompletedL:state.todos.filter((todo)=>!todo.completed).length
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        toggleFilter:(filterType)=>{
            dispatch(setFilter(filterType))
        },
        clearCompleted:()=>{
            dispatch(clearCompletedTodo())
            console.log('clear')
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)