import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, postNote } from '../actions/index';
import { Button, Modal, Icon } from 'semantic-ui-react';
import CreateForm from './createForm';
import { bindActionCreators } from 'redux';
class CreateNote extends Component {
	state = { open: false, title: '', description: '', submittedName: '', submittedEmail: '' };
	show = () => () => this.setState({ open: true });
	close = () => this.setState({ open: false });
	handleSubmit = ({ title, description }) => {
		this.props.postNote({ title, description });
		this.close();
	};
	render() {
		const { open, title, description } = this.state;

		return (
			<div>
				<Button onClick={this.show()} positive fluid>
					<Icon name="add" /> Create Note
				</Button>
				<Modal dimmer={'inverted'} open={open} onClose={this.close}>
					<Modal.Header>Add your Note</Modal.Header>
					<Modal.Content>
						<Modal.Description />
						<CreateForm onSubmit={this.handleSubmit} />
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

function mapDispatchToprops(dispatch) {
	return bindActionCreators({ getNotes, postNote }, dispatch);
}

export default connect(null, mapDispatchToprops)(CreateNote);
