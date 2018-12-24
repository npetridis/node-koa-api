const authenticator = async (ctx, next) => {
  // console.log('ctx', ctx);
  // console.log('cookies', ctx.cookies);
  if (ctx.isAuthenticated()) {
    await next();
  } else {
    ctx. status = 401;
    ctx.body = { message: 'User is not authenticated' };
  }
}

export default authenticator;