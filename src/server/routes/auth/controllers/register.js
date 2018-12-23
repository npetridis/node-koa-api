import { User } from '../../../models';
// ajv object validation

const register = async (ctx) => { // TODO verification email to user
  try {
    const userData = ctx.request.body;  // TODO: js schema validation of ctx.request.body
    const user = await new User(userData).save();
    
    ctx.status = 200;
    ctx.body = {
      status: 'success',
      payload: user
    };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      payload: error.message
    };
  }
}

export default register;