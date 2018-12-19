// import passport from 'koa-passport';

const logout = async (ctx) => {
  if (ctx.isAuthenticated()) {
    const user = ctx.state.user
    ctx.logout();
    ctx.body = { 
      success: true,
      message: 'User successfully logged out ' + user.username
    };
    // ctx.redirect('/auth/login');
  } else {
    ctx.body = { success: false };
    ctx.throw(401);
  }
}

export default logout;
