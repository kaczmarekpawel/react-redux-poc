/**
 * Created by Paweł Kaczmarek on 2016-11-20.
 */

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import defaultState from './data/initState';
import dictionaryReducer from './DictionaryList/reducers';

let reducers = combineReducers({
	dictionaries: dictionaryReducer
});

export default createStore(reducers, defaultState);