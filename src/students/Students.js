/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import React from 'react';
import {connect} from 'react-redux';
import {removeStudent, searchStudent} from './actions'
import ListItem from '../dictionaryListItem/DictionaryListItem';
import SearchBar from '../searchBar/SearchBar';

const mapStateToProps = (state) => {
	return {
		searchPhrase: state.students.searchPhrase,
		filteredStudents: state.students.items.filter(s =>
			s.name.toLowerCase().indexOf(state.students.searchPhrase.toLowerCase()) > -1
		)
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		removeStudent: (id) => {dispatch(removeStudent(id))},
		searchStudent: (phrase) => {dispatch(searchStudent(phrase))}
	}
};

const Students = ({filteredStudents, searchPhrase, removeStudent, searchStudent}) => (
	<div>
		<SearchBar value={searchPhrase} onChange={searchStudent}/>
		<ul>
			{filteredStudents.map(s =>
				<div key={s.id}>
					<ListItem item={s} onRemove={removeStudent}/>
				</div>
			)}
		</ul>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Students);