import React, { Component } from "react";
import Counter from "./Counter.js";

const style = {
    margin: "20px"
};

class ControlPanel extends Component {
    constructor() {
        super();
        this.changeRender = this.changeRender.bind(this);
        this.onUpdateCount = this.onUpdateCount.bind(this);
        this.countArray = [0,10,100];
        
        const t = this.countArray.reduce((sum,value)=>sum+value);
        this.state = {
            total: t
        };
    }
    changeRender() {
        // this.setState({ value: this.state.value+1 });
        // this.forceUpdate();
    }
    onUpdateCount(newCount,oldCount){
        const diffCount = newCount-oldCount;
        this.setState({total:this.state.total+diffCount})
    }
    render() {
        console.log(this.state.total,"enter ControlPanel render");
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" onUpdateCount={this.onUpdateCount} initValue={this.countArray[1]} />
                <Counter caption="Third" onUpdateCount={this.onUpdateCount} initValue={this.countArray[2]} />
                <button onClick={this.changeRender}>
                    Click me to re-render!
                </button>
                <span>{this.state.total}</span>
            </div>
        );
    }
}

export default ControlPanel;
