import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon, Form } from 'semantic-ui-react';
import axios from 'axios';

class CreateNote extends Component {
	state = { open: false, title: '', description: '', submittedName: '', submittedEmail: '' };
	show = () => () => this.setState({ open: true });
	close = () => this.setState({ open: false });
	handleChange = (e, { name, value }) => this.setState({ [name]: value });
	handleSubmit = () => {
		const { title, description } = this.state;
		axios.post('/api/v1/notes', {
			title: title,
			description: description
		});
		this.setState({ submittedName: title, submittedEmail: description, title: '', description: '' });
		console.log(this.state);
	};
	render() {
		const { open, title, description, submittedName, submittedEmail } = this.state;

		return (
			<div>
				<Button onClick={this.show()} positive fluid>
					<Icon name="add" /> Create Note
				</Button>
				<Modal dimmer={'inverted'} open={open} onClose={this.close}>
					<Modal.Header centered>Add your Note</Modal.Header>
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

export default CreateNote;
