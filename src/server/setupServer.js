import router from './routes';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';

const setup = app => {
  app.keys = ['super-secret-key'];  // TODO move to .env after finding out what it does!
  app.use(session(app));
  
  app.use(bodyParser());
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(router.routes());
  
  return app;
};

export default setup;