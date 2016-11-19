import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

// Czyli np bierzemy sobie 2 słowniki  gdzie występują:
// 	1) Radio
//  2) Checkboxy
//  3) Relacja many to many  (relacja z filtrowaniem np. chcemy aby dało się przypisać wszytko poza rekordem o ID 1)
//  4) Relacja one to many
//  + Walidacja tych elementów przed zapisem.
//  + Callback po zapisie (dodanie nowego elementu do kolekcji)
//  + Callback po update


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
