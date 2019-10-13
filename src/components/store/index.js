import {createStore, combineReducers} from 'redux';
// you use this because your data got complex and you are combining reducers, it adds them to an array @946 12 OCT
import teamsReducer from './reducer.js';

let reducers=combineReducers({
  teams:teamsReducer
});


const store=()=>createStore(reducers);

export default store;

// we neeed to conncet all into the store. 
// 