import Koa from 'koa';
import connectDatabase from './database';
import setupServer from './server';
import config from '../config';

console.log('environment:', process.env.NODE_ENV);

const app = new Koa();
const port = config.app.port || 1337;

const server = (async () => {
  try {
    const info = await connectDatabase(config.db.uri);
    console.log(`Connected to  database ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to database');
  }

  setupServer(app);

  await app.listen(port, () => console.log(`Server listening on port: ${port}`));
  return app;
})();

// connectDatabase(config.db.uri).then(() => console.log(`Connected to  database ${info.host}:${info.port}/${info.name}`));
// setupServer(app);
// const server = app.listen(port, () => console.log(`Server listening on port: ${port}`));

export default server;
