import React, { Component } from "react";
import PropTypes from 'prop-types'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: this.props.initValue,
            caption:this.props.caption
        };
        console.log(`enter constructor ${this.props.caption}`)
    }

    onClickButton() {
        this.setState({ count: this.state.count + 1 });
    }
    componentWillMount(){
        console.log(`enter componentWillMount ${this.props.caption}`)
    }
    componentDidMount(){
        console.log(`enter componentDidMount ${this.props.caption}`)
    }
    componentWillReceiveProps(nextProps){ //nextProps新的props参数
        // this.setState({count:nextProps.initValue})
        console.log(`enter componentWillReceiveProps ${this.props.caption}`)
    }
    shouldComponentUpdate(nextProps,nextStates){
        console.log(`enter shouldComponentUpdate`,nextProps,nextStates,this.state)

        return (nextStates.count!==this.state.count)
    }
    componentWillUpdate(){

    }


    onClickIncrementButton(){
        this.updateCount(true)
    }
    onClickDecrementButton(){
        this.updateCount(false)
    }
    updateCount(isIncrement){
        const oldValue = this.state.count;
        const newCount = isIncrement ? oldValue + 1 : oldValue - 1;
        this.setState({count: newCount});
        console.log(this.state.count)
        this.props.onUpdateCount(newCount,oldValue);
    }
    render() {        
        console.log(`enter render ${this.props.caption} ${this.state.count}`)
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
    initValue: PropTypes.number,
    onUpdateCount:PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdateCount:()=>{}
  };

export default Counter;
