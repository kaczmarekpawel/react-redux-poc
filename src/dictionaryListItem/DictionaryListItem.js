/**
 * Created by Paweł Kaczmarek on 2016-11-21.
 */

import React from 'react';
import {Button} from 'react-bootstrap';

const DictionaryListItem = ({item, onRemove}) => (
	<div>
		<span>{item.name}</span>
		<Button onClick={() => onRemove(item.id)}>X</Button>
	</div>
);


export default DictionaryListItem;