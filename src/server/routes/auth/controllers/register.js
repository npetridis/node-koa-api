import passport from 'koa-passport';
import { User } from '../../../models';

const register = async (ctx) => { // TODO verification email to user
  try {
    const userData = ctx.request.body;  // TODO: js schema validation of ctx.request.body
    console.log('register data:', userData);
    const user = await new User(userData).save();
    
    ctx.status = 200;
    ctx.body = { message: 'User successfully registered' };
  } catch (error) {
    console.log(error);
  }
}

export default register;