export default {
  app: {
    port: 4000
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'imdb',
    uri: 'mongodb://mongo:27017/imdb'
  },
  bcrypt: {
    saltRounds: 10
  }
};