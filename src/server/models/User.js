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
  salt: {
    type: String,
    required: true
  }
});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model('User', UserSchema);