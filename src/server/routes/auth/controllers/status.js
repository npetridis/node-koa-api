const status = async (ctx) => {
  if (ctx.isAuthenticated()) {
    console.log('status user', ctx.state.user);
    ctx.status = 200;
    ctx.body = {
      message: 'User is authenticated'
    };
  } else {
    ctx.status = 400;
    ctx.body = {
      message: 'User is not authenticated'
    };
  }
};

export default status;