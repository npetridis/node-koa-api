import { Users } from '../../../domain';

const register = async ctx => { // TODO verification email to user
  try {
    const user = await Users.saveUser(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      status: 'success',
      payload: user // TODO remove payload
    };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      payload: error.message
    };
  }
};

export default register;
