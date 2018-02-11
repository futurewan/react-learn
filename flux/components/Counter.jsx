import React, { Component } from "react";
import PropTypes from 'prop-types';
import CounterStore from '../stores/CounterStore';
import * as Actions from '../Actions'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.updateCount = this.updateCount.bind(this);
        
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        };
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.updateCount)
    }
    componentWillUnmount(){
        CounterStore.removeChangeListener(this.updateCount)
    }
    onClickIncrementButton(){
        Actions.increment(this.props.caption)
    }
    onClickDecrementButton(){
        Actions.decrement(this.props.caption)
    }
    updateCount(){
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        this.setState({count: newCount});
    }
    render() {        
        const counterStyle = {
            margin: "16px"
        };
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{this.state.caption} count: {this.state.count}</span>
           </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
};


export default Counter;
