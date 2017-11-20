import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import Note from './Note';

export default class NoteList extends Component {
	state = {
		notes: []
	};
	componentDidMount() {
		this.getNotes();
	}

	getNotes() {
		axios.get('/api/v1/notes').then(results => this.setState({ notes: results.data }));
	}
	render() {
		console.log(this.state.notes);
		const notesList = this.state.notes.map(({ title, description }, i) => (
			<Note header={title} description={description} key={i} />
		));

		return <Card.Group>{notesList}</Card.Group>;
	}
}
