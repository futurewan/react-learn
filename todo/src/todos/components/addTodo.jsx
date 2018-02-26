import React from 'react';
import {addTodo} from '../actions';
import {connect} from 'react-redux';


// import {Store} from '../../Store';

class ADDTodo extends React.Component {
    constructor(props){
        super(props);
        const {addTodo} = this.props;
        this.state = {
            value:''
        }
        this.changeText = this.changeText.bind(this);
        this.keyUpText = this.keyUpText.bind(this)
    }
    changeText(e){
        this.setState({value:e.target.value})
    }
    keyUpText(e){
        if(e.key === 'Enter'){
            const value = this.state.value;
            if(!value.trim()){
                return alert('任务不能为空')
            }
            this.props.addTodo(value);
            this.setState({value:''})
        }
    }
    render(){
        return(
            <input className="add-input" type="text" placeholder="你的任务" onKeyUp={this.keyUpText} onInput={this.changeText} value={this.state.value} autoFocus="autofocus" />
        )
    }
}
    
const mapDispatchToParps = (dispatch)=>{
    return{
        addTodo:(text)=>{
            dispatch(addTodo(text))
        }
    }
};
export default connect(null,mapDispatchToParps)(ADDTodo);