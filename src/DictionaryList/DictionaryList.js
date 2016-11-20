/**
 * Created by Paweł Kaczmarek on 2016-11-19.
 */
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addDictionary } from './actionCreators';

const mapStateToProps = (state) => {
	return {
		dictionaries: state.dictionaries,
		onDictionaryClick: (name) => {console.log('dict click', name)}
	}
};



const mapDispatchToProps = (dispatch) => {
	return {
		onDictionaryAddClick: () => {
			dispatch(addDictionary((new Date()).getTime()));
		}
	}
};


const DictionaryList = ({dictionaries, onDictionaryAddClick, onDictionaryClick}) => (
	<div>
		<ul>
			{dictionaries.map(d =>
				<li key={d.name}
					onClick={() => onDictionaryClick(d.name)}>
					{d.name}
				</li>)}
		</ul>
		<Button onClick={() => {onDictionaryAddClick()}}>
			Add
		</Button>
	</div>
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DictionaryList);
