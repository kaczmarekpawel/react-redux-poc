/**
 * Created by Paweł Kaczmarek on 2016-11-19.
 */

import { ADD_DICTIONARY, REMOVE_DICTIONARY } from './actionTypes'


function dictionaries(state = [], action) {
	switch (action.type) {
		case ADD_DICTIONARY:
			return [
				...state,
				{
					name: action.name
				}
			];

		case REMOVE_DICTIONARY:
			return state.filter(d => d.name !== action.name);

		default:
			return state;
	}
}

export default dictionaries;