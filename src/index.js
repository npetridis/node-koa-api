import Koa from 'koa';
import connectDatabase from './database';
import setupServer from './server';

import 'dotenv/config';

const app = new Koa();
const port = process.env.PORT || 1337;

(async () => {
  try {
    const info = await connectDatabase(process.env.DB_URI);
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to database');
  }
  
  setupServer(app);

  await app.listen(port, () => console.log(`Server listening on port: ${port}`));
})();