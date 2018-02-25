import {createStore} from 'redux';
import reducer from './Reducer'

const counterValues={
    'First':0,
    'Second':10,
    'Third':100
}

const store = createStore(reducer,counterValues);

export default store;