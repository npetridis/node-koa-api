// import 'dotenv/config';

export default {
  app: {
    port: 4000
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'imdb',
    uri: 'mongodb://localhost:27017/imdb'
  },
  sessionDb: {
    host: 'localhost',
    port: 6379,
  },
  bcrypt: {
    saltRounds: 10
  }
};
