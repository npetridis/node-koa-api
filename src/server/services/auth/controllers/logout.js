const logout = async ctx => {
  if (ctx.isAuthenticated()) {
    // const user = ctx.state.user;
    ctx.logout();
    ctx.status = 204;
    // ctx.body = {
    //   status: 'success',
    //   message: 'User successfully logged out ' + user.username
    // };
  } else {
    ctx.status = 403;
    // ctx.body = {
    //   status: 'success'
    //   message: 'The user wasn\'t logged in.'
    //  };
    // ctx.throw(401);
  }
};

export default logout;
