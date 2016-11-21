/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import {ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT} from './actionTypes';

export const addStudent = (name, address) => {
	return {
		type: ADD_STUDENT,
		id: (new Date()).getTime(),
		name,
		address
	}
}


export const removeStudent = (id) => {
	return {
		type: REMOVE_STUDENT,
		id
	}
}

export const updateStudent = (id, name, address) => {
	return {
		type: UPDATE_STUDENT,
		id,
		name,
		address
	}
}