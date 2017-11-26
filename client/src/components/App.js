import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import AppHeader from './AppHeader';
import CreateNote from '../container/CreateNote';
import NoteList from '../container/NoteList';
class App extends Component {
	render() {
		return (
			<Container>
				<AppHeader />
				<br />
				<CreateNote />
				<br />
				<NoteList />
			</Container>
		);
	}
}

export default App;
