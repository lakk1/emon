import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input } from 'semantic-ui-react';

const LoginForm = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<Form onSubmit={handleSubmit}>
			<Form>
				<Form.Field>
					<label>Email</label>
					<Field name="email" component="input" type="email" placeholder="Email" />
				</Form.Field>

				<Form.Field>
					<label>Password</label>
					<Field name="password" component={Input} type="password" placeholder="password" />
				</Form.Field>

				<Button type="submit" disabled={pristine || submitting} positive>
					Submit
				</Button>
			</Form>
		</Form>
	);
};

export default reduxForm({
	form: 'loginForm',
})(LoginForm);
