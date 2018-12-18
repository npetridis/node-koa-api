import dev from './development';
import test from './test';

const config = {
  dev,
  test
};

const environment = process.env.NODE_ENV || 'dev';

export default config[environment];