import React,{Component} from 'react';
import SummaryStore from '../stores/SummaryStore'


export default class Summary extends Component{
    constructor(props){
        super(props);
        this.updateSummary = this.updateSummary.bind(this);
        this.state = {
           sum:SummaryStore.getSummary()
        }
    }

    componentDidMount(){
        SummaryStore.addChangeListener(this.updateSummary);
    }
    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onUpdate);
      }
    updateSummary(){
        this.setState({sum:SummaryStore.getSummary()})
    }
    render(){
        return(
            <div>Total Count:{this.state.sum}</div>
        )
    }
}