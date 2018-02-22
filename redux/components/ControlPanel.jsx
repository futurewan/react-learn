import React, { Component } from "react";
import Counter from "./Counter";
import Summary from './Summary';

import * as Actions from "../Actions";
import Store from '../Store'

const style = {
    margin: "20px"
};

class ControlPanel extends Component {
    constructor() {
        super();
        this.changeRender = this.changeRender.bind(this);
    }
    changeRender() {
        Store.dispatch(Actions.double())
        // this.setState({ value: this.state.value+1 });
        // this.forceUpdate();
    }
    render() {
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary />
                <button onClick={this.changeRender}>
                    Click me to double!
                </button>
            </div>
        );
    }
}

export default ControlPanel;
