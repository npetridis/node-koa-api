import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../../../config';

const UserSchema = new mongoose.Schema({
  email: {  // TODO email validation
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique : true
  },
  dob: {
    type: Date,
    required: false,
  }
});

UserSchema.pre('save', async function(next) {  // TODO giati den paizei me arrow function??
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, config.bcrypt.saltRounds);
  next();
});

UserSchema.methods.validatePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

export default mongoose.model('User', UserSchema);