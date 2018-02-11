import { EventEmitter } from "events";
import * as ActionTypes from "../ActionTypes";
import AppDispatcher from "../AppDispatcher";
import CounterStore from "./CounterStore";

const CHANGE_EVENT = "changed";

function computeSummary(counterValues) {
    let cummary = 0;
    for (const key in counterValue) {
        if (counterValue.hasOwnPropery(key)) {
            summary += key;
        }
    }
    return commary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function() {
        return computeSummary(CounterStore.getCounterValues());
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

SummaryStore.dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.INCREMENT ||
        action.type === ActionTypes.DECREMEN) {
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;
