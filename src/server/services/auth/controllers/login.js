import passport from 'koa-passport';

const login = async ctx => {
  return passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = {
        status: 'error',
        message: err.message
      };
    } else if (user) {
      ctx.login(user);
      ctx.redirect('/auth/status');
    } else {
      ctx.status = 400;
      ctx.body = { status: 'error' };
    }
  })(ctx);
};

export default login;
