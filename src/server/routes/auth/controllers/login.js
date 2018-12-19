import passport from 'koa-passport';
// import { User } from '../../models';

// const login = async (ctx) => {
//   try {
//     const encryptedPwd = ctx.request.body.password;
//     const userData = Object.assign({}, ctx.request.body, { password: encryptedPwd });
//     const user = await User.findOne(userData);
//     if (user) {
// 
//     } else {
// 
//     }
//   } catch (error) {
// 
//   }
// }

const login = async (ctx) => {
  return passport.authenticate('local', (err, user, info, status) => {
    if (user) {
      ctx.login(user);
      // ctx.body = { success: true };
      ctx.redirect('/auth/status');
    } else {
      ctx.status = 400;
      ctx.body = { status: 'error' };
    }
  })(ctx);
}

export default login;