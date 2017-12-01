import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, Icon, Form, Input } from 'semantic-ui-react';
const CreateForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<Form onSubmit={handleSubmit}>
			<Form>
				<Form.Field>
					<label>Title</label>
					<Field name="title" component="input" type="text" placeholder="title" />
				</Form.Field>

				<Form.Field>
					<label>Description</label>
					<Field name="description" component={Input} type="text" placeholder="description" />
				</Form.Field>

				<Button type="submit" disabled={pristine || submitting} positive>
					Submit
				</Button>
			</Form>
		</Form>
	);
};

export default reduxForm({
	form: 'noteform',
})(CreateForm);
