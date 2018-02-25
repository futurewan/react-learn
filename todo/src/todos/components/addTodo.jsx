import React from 'react';


class ADDTodo extends React.Component {
    constructor(){
        super();
        this.state = {
            value:''
        }
        this.addTodo = this.addTodo.bind(this);
        this.keyUpText = this.keyUpText.bind(this)
    }
    addTodo(e){
        this.setState({value:e.target.value})
    }
    keyUpText(e){
        if(e.key === 'Enter'){
            alert(this.state.value)
        }
        // console.log(e.key,e.keyCode,e.which)
    }
    render(){
        return(
            // <div className="add-todo">
                <input className="add-input" type="text" placeholder="你的任务" onKeyUp={this.keyUpText} onInput={this.addTodo} autoFocus="autofocus" />
            // </div>
        )
    }
}

export default ADDTodo;