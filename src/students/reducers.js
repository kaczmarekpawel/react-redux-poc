/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import {UPDATE_STUDENT,REMOVE_STUDENT,ADD_STUDENT} from './actionTypes';

function students(state = [], action) {
	switch(action.type) {
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
}

export default students;