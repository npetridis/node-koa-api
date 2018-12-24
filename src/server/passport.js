import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from './models';

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // TODO dont project password
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    // console.log('user//', user);
    // console.log('data//', username, password);
    if (user && user.validatePassword(password)) {
      return done(null, user);
    } else {
      return done(null, false, { errors: { 'email or password': 'is invalid' } });
    }
  
  } catch (error) {
    console.log(error)
    // TODO error handling?
  }
}));