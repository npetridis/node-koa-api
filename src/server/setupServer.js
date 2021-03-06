// import Router from 'koa-router';
// import router from './services';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import session from 'koa-session';
import { connectSession } from '../databases';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';
import 'dotenv/config';

import { routes } from './services';
import createRouter from './createRouter';
import { errorHandler } from './middleware';

const setup = app => {
  app.use(errorHandler);
  app.use(logger());
  app.use(helmet());
  app.use(cors());
  app.keys = [process.env.APP_KEY];
  app.use(session({
    store: connectSession()
  }, app));

  app.use(bodyParser());

  // import('./auth');
  app.use(passport.initialize());
  app.use(passport.session());
  require('./passport');

  const router = createRouter(routes);
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};

export default setup;
