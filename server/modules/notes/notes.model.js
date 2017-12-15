const mongoose = require('mongoose');

const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const NoteSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required!'],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required!'],
  },
});

NoteSchema.plugin(uniqueValidator, {
  message: '{VALUE} already taken!',
});

NoteSchema.methods = {
  toJson() {
    return {
      _id: this._id,
      title: this.title,
      description: this.description,
    };
  },
};

const NoteModel = mongoose.model('Note', NoteSchema);

module.exports = NoteModel;
