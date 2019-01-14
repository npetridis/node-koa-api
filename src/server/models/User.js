import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../../../config';

const userSchema = new mongoose.Schema({
  email: { // TODO email validation
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: false
  }
});

userSchema.pre('save', async function(next) { // TODO den paizei me arrow function??
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, config.bcrypt.saltRounds);
  next();
});

userSchema.methods.validatePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);
