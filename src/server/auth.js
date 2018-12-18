import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from './models';

// const fetchUser = async (id) => {
//   try {
//     const user = await User.findOne({ _id: id });
//     if (user) {
// 
//     } else {
// 
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// const fetchUserById = (id) => User.findOne({ _id: id });  // TODO project username and password

// const fetchUser = (id) => User.findById({ _id: id });  // TODO project username and password

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // TODO dont project password
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (user || user.validatePassword(password)) {
      return done(null, user);
    } else {
      return done(null, false, { errors: { 'email or password': 'is invalid' } });
    }
  } catch (error) {
    console.log(error)
    // TODO error handling?
  }
  // fetchUser()
  //   .then(user => {
  //     if (username === user.username && password === user.password) {
  //       done(null, user)
  //     } else {
  //       done(null, false)
  //     }
  //   })
  //   .catch(err => done(err))
}));