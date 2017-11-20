import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CreateNote from './CreateNote';
import AppHeader from './AppHeader';
import NoteList from './NoteList';
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
