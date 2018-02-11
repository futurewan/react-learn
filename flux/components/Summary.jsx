import React,{Component} from 'react';
import SummaryStore from '../stores/SummaryStore'


export default class Summary extends Component{
    constructor(props){
        super(props);

    //    this.state = {
    //        sum:SummaryStore.getSummary()
    //    }
    }


    render(){
        return(
            <div>Total Count:</div>
        )
    }
}