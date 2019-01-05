import RedisStore from 'koa-redis';

import config from '../../config';

const redis = () => new RedisStore({
  host: config.sessionDb.host,
  port: config.sessionDb.port
});

export default redis;
