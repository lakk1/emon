import React from 'react';
import { Card } from 'semantic-ui-react';

const Note = props => {
	console.log(props);

	return <Card header={props.header} meta="Friend" description={props.description} fluid />;
};

export default Note;
