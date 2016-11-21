/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import React from 'react';
import {connect} from 'react-redux';
import {removeStudent} from './actions'

const mapStateToProps = (state) => {
	return {
		students: state.students
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeStudent: (id) => {dispatch(removeStudent(id))}
	}
};

const Students = ({students, removeStudent}) => (
	<div>
		<ul>
			{students.map(s =>
				<li key={s.id}>
					<span>{s.name}</span>
					<div onClick={() => removeStudent(s.id)}>X</div>
				</li>
			)}
		</ul>
	</div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Students);