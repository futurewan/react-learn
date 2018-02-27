import React from 'react';
import {connect} from 'react-redux';
import '../filter.less';
import classNames from 'classnames';

import {FilterTypes} from '../../constants.js';


class Filter extends React.Component{
    render(){
        const {toggleFilter} = this.props;
        // const spanCls = classNames({
        //     'actived':filter === state
        // })
        return(
            <div className="helper">
                <span className="left"> item left</span>
                <span className="tabs">
                    {
                        Object.entries(FilterTypes).map((state)=>{
                            return (
                                <span 
                                    key={state[0]} 
                                    // className={spanCls}
                                    onClick={()=>toggleFilter(state[1])}
                                >
                                    {state[1]}
                                </span>
                            )
                        })
                    }
                </span>
                <span className="clear">clear completed</span>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        toggleFilter:(filter)=>{
            dispatch()
        }
    }
}
export default connect(null,mapDispatchtoProps)(Filter)