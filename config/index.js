import dev from './dev';
import test from './test';
import prod from './prod';

const config = {
  dev,
  test,
  prod
};

const environment = process.env.NODE_ENV || 'dev';

export default config[environment];
