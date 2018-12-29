// import Router from 'koa-router';
// import router from './services';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import 'dotenv/config';

import { authRoutes, movieRoutes } from './services';
import createRouter from './createRouter';
import { errorHandler } from './middleware';

const setup = app => {
  app.use(errorHandler);
  app.use(logger());
  app.use(helmet());
  app.keys = [process.env.APP_KEY]; // TODO move to .env after finding out what it does!
  app.use(session(app));

  app.use(bodyParser());

  // import('./auth');
  app.use(passport.initialize());
  app.use(passport.session());
  require('./passport');

  const router = createRouter([authRoutes, movieRoutes]);
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};

export default setup;
