import { EventEmitter } from "events";
import * as ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';

const CHANGE_EVENT = 'changed';

const counterValues={
    'First':0,
    'Second':10,
    'Third':100
}

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues:function(){
        return counterValues
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback)
    },
    removeChangeListener:function(){
        this.removeChangeListener(CHANGE_EVENT,callback)
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    switch (action.type){
        case ActionTypes.INCREMENT:
            counterValues[action.counterCaption]++;
            CounterStore.emitChange();
            break;
        case ActionTypes.DECREMENT:
            counterValues[action.counterCaption]--;
            CounterStore.emitChange();
            break;
    }
})

export default CounterStore;