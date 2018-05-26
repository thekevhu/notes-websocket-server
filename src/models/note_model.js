import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  xPosition: Number,
  yPosition: Number,
  desc: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);


// create NoteModel class from schema


export default NoteModel;
