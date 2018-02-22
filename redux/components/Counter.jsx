import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import * as Actions from "../Actions";

const counterStyle = {
    margin: "16px"
};
function Counter({caption, onIncrement, onDecrement, value}){
    return (
        <div style={counterStyle}>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>
                {caption} count: {value}
            </span>
        </div>
    );
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};



function mapStateToProps(state,ownProps){
    return {
        value:state[ownProps.caption]
    }
}

function mapDispatchtoProps(dispatch, ownProps){
    return{
        onIncrement:()=>{
            dispatch(Actions.increment(ownProps.caption))
        },
        onDecrement:()=>{
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Counter);


// class CounterContainer extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.onIncrement = this.onIncrement.bind(this);
//         this.onDecrement = this.onDecrement.bind(this);
//         this.updateCount = this.updateCount.bind(this);
//         this.getOwnState = this.getOwnState.bind(this);

//         this.state = this.getOwnState();
//     }

//     getOwnState() {
//         return {
//             value: this.context.store.getState()[this.props.caption]
//         };
//     }

//     componentDidMount() {
//         this.context.store.subscribe(this.updateCount);
//     }
//     componentWillUnmount() {
//         this.context.store.unsubscribe(this.updateCount);
//     }
//     onIncrement() {
//         this.context.store.dispatch(Actions.increment(this.props.caption));
//     }
//     onDecrement() {
//         this.context.store.dispatch(Actions.decrement(this.props.caption));
//     }
//     updateCount() {
//         this.setState(this.getOwnState());
//     }
//     render() {
//         const counterStyle = {
//             margin: "16px"
//         };
//         return (
//             <Counter
//                 caption={this.props.caption}
//                 onIncrement={this.onIncrement}
//                 onDecrement={this.onDecrement}
//                 value={this.state.value}
//             />
//         );
//     }
// }


// CounterContainer.propTypes = {
//     caption: PropTypes.string.isRequired
// };

// CounterContainer.contextTypes = {
//     store: PropTypes.object
// };
