import React,{Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

function Summary({sum}){
    return(
        <div>Total Count:{sum}</div>
    )
}
Summary.propTypes = {
    sum:PropTypes.number.isRequired
}
function mapStateToProps(state){
    let summary = 0;

    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            summary += state[key];
        }
    }
    return {
        sum:summary
    }
}


export default connect(mapStateToProps)(Summary)