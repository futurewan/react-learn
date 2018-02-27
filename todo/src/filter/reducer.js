import {SET_FILTER,CLEARCOMPLETED_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js';

export default (previousState = FilterTypes.ALL,action)=>{
    switch(action.type) {
        case SET_FILTER: {
          return action.filter;
        }
        default:
          return previousState;
      }
}