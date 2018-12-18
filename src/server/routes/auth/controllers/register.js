import passport from 'koa-passport';
import { User } from '../../../models';

const register = async (ctx) => { // TODO verification email to user
  try {
    const userData = ctx.request.body;  // TODO: js schema validation of ctx.request.body
    console.log('register data:', userData);
    const user = await new User(userData).save();
    
    return passport.authenticate('local', (err, user, info, status) => {
      if (user) {
        ctx.login(user);
        ctx.redirect('/auth/status');
      } else {
        ctx.status = 400;
        ctx.body = { status: 'error' };
      }
    })(ctx);
    
  } catch (error) {
    console.log(error);
  }
}

export default register;