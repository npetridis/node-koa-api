// import Router from 'koa-router';
// import movieRouter from './movie';
// import { authRouter } from './auth';
// 
// const router = new Router();
// 
// router
//   .use('/auth', authRouter.routes())
//   .use('/api', movieRouter.routes());
// 
// export default router;

// import { routes as authRoutes } from './auth';
// import { routes as movieRoutes } from './movie';
// 
// export {
//   routes: [authRoutes, movieRoutes]
// };

import { routes as authRoutes } from './auth';
import { routes as movieRoutes } from './movies';

export { authRoutes, movieRoutes };