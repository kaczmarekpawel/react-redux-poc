/**
 * Created by Paweł Kaczmarek on 2016-11-20.
 */
import {ADD_DICTIONARY, REMOVE_DICTIONARY} from './actionTypes';

export const addDictionary = (name) => {
	return {
		type: ADD_DICTIONARY,
		name
	}
}

export const removeDictionary = (name) => {
	return {
		type:REMOVE_DICTIONARY,
		name
	}
}
