// import Router from 'koa-router';
// import router from './services';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';

import { authRoutes, movieRoutes } from './services';
import createRouter from './createRouter';

const setup = app => {
  app.keys = ['super-secret-key'];  // TODO move to .env after finding out what it does!
  app.use(session(app));
  
  app.use(bodyParser());
  
  // import('./auth');
  app.use(passport.initialize());
  app.use(passport.session());
  require('./auth');
  
  const router = createRouter([authRoutes, movieRoutes]);
  app.use(router.routes());
  
  return app;
};

export default setup;