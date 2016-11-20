/**
 * Created by Paweł Kaczmarek on 2016-11-20.
 */
import {ADD_DICTIONARY, REMOVE_DICTIONARY} from './actionTypes';

export function addDictionary(name) {
	return {
		type: ADD_DICTIONARY,
		name
	}
}

export function removeDictionary(name) {
	return {
		type: REMOVE_DICTIONARY,
		name
	}
}