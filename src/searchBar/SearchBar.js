/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import React from 'react';
import {FormControl} from 'react-bootstrap';


const SearchBar = ({value, onChange}) => (
	<div>
		<FormControl
			type="text"
			value={value}
			placeholder="Search..."
			onChange={(e) => onChange(e.target.value)}
		/>
	</div>
);

export default SearchBar;