
import React, {Component} from 'react';
import {Grid, Panel, Row, Col} from 'react-bootstrap';
import DictionaryList from './dictionaryList/DictionaryList';
import Students from './students/Students';
import './App.css';



class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Proof of Concept</h2>
				</div>
				<Grid fluid={true}>
					<Row>
						<Col sm={3}>
							<Panel>
								<DictionaryList/>
							</Panel>
						</Col>
						<Col sm={9}>
							<Panel><Students/></Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
