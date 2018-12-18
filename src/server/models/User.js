import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../../../config';

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
  }
});

UserSchema.methods.setPassword = password => this.password = bcrypt.hash(password, config.bcrypt.saltRounds);

UserSchema.methods.validatePassword = password => bcrypt.compare(password, this.password);

module.exports = mongoose.model('User', UserSchema);