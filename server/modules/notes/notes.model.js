const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
	title: {
		type: String,
		required: [ true, 'Title is required!' ]
	},
	description: {
		type: String
		// required: [ true, 'Description is required!' ]
	}
});

const NotesModel = mongoose.model('Notes', NotesSchema);

module.exports = NotesModel;
