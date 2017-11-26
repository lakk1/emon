import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote, getNotes, totalNotes, openNote } from '../actions/index';
import { Card, Modal } from 'semantic-ui-react';

import { bindActionCreators } from 'redux';
class NoteList extends Component {
	state = { open: false };
	componentDidMount() {
		this.props.getNotes();
	}

	show = () => () => this.props({ open: true });
	close = () => this.setState({ open: false });
	render() {
		if (!this.props.note.list) {
			return <h1>Notes are loadin... </h1>;
		}
		const notesList = this.props.note.list.map(({ title, description }, i) => (
			<Card
				header={title}
				onClick={() => {
					this.props.selectNote({ title, description });
					this.props.openNote(true);
				}}
				// onClick={() => }
				// onClick={this.handleClick}
				description={description}
				key={i}
			/>
		));

		return (
			<Card.Group>
				{notesList}
				<Modal
					dimmer={'inverted'}
					open={this.props.note.isOpen}
					onClose={() => this.props.openNote(false)}
				>
					<Modal.Header>{this.props.note.selected.title}</Modal.Header>
					<Modal.Content>
						<Modal.Description>{this.props.note.selected.description}</Modal.Description>
					</Modal.Content>
				</Modal>
			</Card.Group>
		);
	}
}

function mapStateToProps(state) {
	return {
		note: state.note,
	};
}

function mapDispatchToprops(dispatch) {
	return bindActionCreators({ selectNote, getNotes, totalNotes, openNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(NoteList);
