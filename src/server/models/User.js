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

// UserSchema.methods.setPassword = password => this.password = bcrypt.hash(password, config.bcrypt.saltRounds);

// UserSchema.methods.setPassword = async function(password) {
//   this.password = await bcrypt.hash(password, config.bcrypt.saltRounds);
//   console.log(`pwd ${password} hash -> ${this.password}`);
// }

UserSchema.pre('save', async function (next) {  // TODO giati den paizei me arrow function??
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, config.bcrypt.saltRounds);
  console.log('pwd is hashed');
  next();
});

// UserSchema.pre('save', function(next) {
//     var user = this;
// 
//     // only hash the password if it has been modified (or is new)
//     // if (!user.isModified('password')) return next();
// 
//     // generate a salt
//     bcrypt.hash(user.password, 10, function(err, hash) {
//         if (err) return next(err);
// 
//         // override the cleartext password with the hashed one
//         user.password = hash;
//         console.log('hash', hash);
//         next();
//     });
// });

UserSchema.methods.validatePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);