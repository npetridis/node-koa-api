import router from './routes';

const setup = app => {
  app.use(router.routes());
  
  return app;
};

export default setup;