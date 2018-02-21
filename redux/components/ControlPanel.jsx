import React, { Component } from "react";
import Counter from "./Counter";
// import Summary from './Summary'

const style = {
    margin: "20px"
};

class ControlPanel extends Component {
    constructor() {
        super();
        this.changeRender = this.changeRender.bind(this);
    }
    changeRender() {
        // this.setState({ value: this.state.value+1 });
        // this.forceUpdate();
    }
    render() {
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <button onClick={this.changeRender}>
                    Click me to re-render!
                </button>
            </div>
        );
    }
}

export default ControlPanel;
