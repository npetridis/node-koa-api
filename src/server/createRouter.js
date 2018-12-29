import Router from 'koa-router';

const createRouter = routes => {
  const routers = routes.map(routeBranch => {
    const router = new Router({ prefix: routeBranch.prefix });
    routeBranch.routes.forEach(route => {
      // console.log('single route:', route);
      router[route.method.toLowerCase()](route.route, ...route.handlers);
    });

    return router;
  });

  const rootRouter = new Router();
  routers.forEach(router => rootRouter.use(router.routes()));
  return rootRouter;
};

export default createRouter;
