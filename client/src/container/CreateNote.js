import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import { Button, Modal, Icon, Form } from 'semantic-ui-react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
class CreateNote extends Component {
	state = { open: false, title: '', description: '', submittedName: '', submittedEmail: '' };
	show = () => () => this.setState({ open: true });
	close = () => this.setState({ open: false });
	handleChange = (e, { name, value }) => this.setState({ [name]: value });
	handleSubmit = () => {
		const { title, description } = this.state;
		axios.post('/api/v1/notes', {
			title: title,
			description: description,
		});

		this.setState({
			submittedName: title,
			submittedEmail: description,
			title: '',
			description: '',
		});
		this.props.getNotes();
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
						<Modal.Description>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group>
									<Form.Input
										placeholder="Title"
										name="title"
										value={title}
										onChange={this.handleChange}
										required
									/>
									<Form.TextArea
										placeholder="Description"
										name="description"
										value={description}
										onChange={this.handleChange}
										required
									/>
									<Form.Button content="Submit" />
								</Form.Group>
							</Form>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

function mapDispatchToprops(dispatch) {
	return bindActionCreators({ getNotes }, dispatch);
}

export default connect(null, mapDispatchToprops)(CreateNote);
