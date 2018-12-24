import Router from 'koa-router';

const createRouter = routes => {
  // console.log('ROUTES:', routes);
  const routers = routes.map(routeBranch => {
      const router = new Router();
      routeBranch.routes.forEach(route => {
        // console.log('single route:', route);
        router[route.method.toLowerCase()](route.route, ...route.handlers)
      });
      
      // console.log(`----prefix: "${routeBranch.prefix}"`);
      return {
        prefix: routeBranch.prefix,
        router
      }
  });
  
  const rootRouter = new Router();
  routers.forEach(({ prefix, router }) => prefix ? rootRouter.use(prefix, router.routes()) : rootRouter.use(router.routes()));
  return rootRouter;
}

export default createRouter;