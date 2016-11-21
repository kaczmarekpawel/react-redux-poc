// Czyli np bierzemy sobie 2 słowniki  gdzie występują:
// 	1) Radio
//  2) Checkboxy
//  3) Relacja many to many  (relacja z filtrowaniem np. chcemy aby dało się przypisać wszytko poza rekordem o ID 1)
//  4) Relacja one to many
//  + Walidacja tych elementów przed zapisem.
//  + Callback po zapisie (dodanie nowego elementu do kolekcji)
//  + Callback po update



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import { Provider } from 'react-redux';
import { addDictionary, removeDictionary } from './dictionaryList/actions';


console.log('init state', store.getState());
//
// let unsubscribe = store.subscribe(() =>
// 	console.log(store.getState())
// );
//
// store.dispatch(addDictionary('new dict 1'));
// store.dispatch(addDictionary('new dict 2'));
// store.dispatch(addDictionary('new dict 3'));
//
// store.dispatch(removeDictionary('new dict 2'));

// unsubscribe();

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

