export default {
	dictionaries: [
		{name: 'Students'},
		{name: 'Teachers'},
		{name: 'Courses'}
	],
	students: {
		searchPhrase: '',
		items: [
			{id: 1, name: 'john', address: 'no street', courses: [1]},
			{id: 2, name: 'mick', address: 'michigan 11', courses: [2]},
			{id: 3, name: 'andy', address: 'chicago', courses: [2]},
			{id: 4, name: 'bony', address: 'NY', courses: [2]},
			{id: 5, name: 'mark', address: 'Gdansk', courses: [1]},
			{id: 6, name: 'clair', address: 'Wawa', courses: [1]},
			{id: 7, name: 'jenny', address: 'Belgrad', courses: [1]},
		]
	}

	// ,
	// teachers: [
	// 	{id: 1, name: 'pawel'},
	// 	{id: 2, name: 'bartosz'},
	// 	{id: 3, name: 'wojtek'}
	// ],
	// courses: [
	// 	{
	// 		id: 1,
	// 		name: 'Junior front end dev edition 1',
	// 		teachers: [1, 2]
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Junior Java dev edition 2',
	// 		teachers: [2, 3]
	// 	}
	//
	// ]
}
