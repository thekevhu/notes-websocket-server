import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id);
};

export const createNote = (fields) => {
  const post = new Note();
  post.desc = fields.desc;
  post.xPosition = fields.xPosition;
  post.yPosition = fields.yPosition;
  post.title = fields.title;
  return post.save();
};


export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
