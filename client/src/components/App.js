import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import * as actions from '../actions';
import AppHeader from '../container/AppHeader';
import CreateNote from '../container/CreateNote';
import NoteList from '../container/NoteList';
class App extends Component {
	componentDidMount() {
		this.props.getNotes();
		this.props.isAuthenticated();
	}

	render() {
		return (
			<Container>
				<BrowserRouter>
					<div>
						<AppHeader />
						<br />
						<Route exact path="/" component={CreateNote} />
						<br />
						<Route exact path="/" component={NoteList} />
					</div>
				</BrowserRouter>
			</Container>
		);
	}
}

export default connect(null, actions)(App);
