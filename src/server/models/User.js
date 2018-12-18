const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {  // TODO email validation
    type: String,
    required: true
  },
  password: { // encrypted with bcrypt?
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('User', UserSchema);