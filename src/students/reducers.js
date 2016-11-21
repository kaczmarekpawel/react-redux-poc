/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import {combineReducers} from 'redux';
import {SEARCH_STUDENT, UPDATE_STUDENT, REMOVE_STUDENT, ADD_STUDENT} from './actionTypes';

const searchPhrase = (state = '', action) => {
	switch (action.type) {
		case SEARCH_STUDENT:
			return action.searchPhrase;
		default:
			return state;
	}
};

const students = (state = [], action) => {
	switch (action.type) {
		case ADD_STUDENT:
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					address: action.address
				}
			];
		case REMOVE_STUDENT:
			return state.filter(s => s.id !== action.id);
		case UPDATE_STUDENT:
			return state.map(s => {
				if (s.id === action.id)
					return Object.assign({}, s, {
						name: action.name,
						address: action.address
					});
				return s;
			});
		default:
			return state;
	}
};

export default combineReducers({
	searchPhrase,
	items: students
});