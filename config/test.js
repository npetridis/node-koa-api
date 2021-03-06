// import 'dotenv/config';

export default {
 app: {
   port: 4000
 },
 db: {
   host: 'localhost',
   port: 27017,
   name: 'imdb-test',
   uri: 'mongodb://localhost/imdb-test'
 },
 bcrypt: {
   saltRounds: 10
 }
};