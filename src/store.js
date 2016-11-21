/**
 * Created by Paweł Kaczmarek on 2016-11-20.
 */

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import defaultState from './data/initState';
import dictionaryReducer from './dictionaryList/reducers';
import studentsReducer from './students/reducers';

let reducers = combineReducers({
	dictionaries: dictionaryReducer,
	students: studentsReducer
});

export default createStore(reducers, defaultState);