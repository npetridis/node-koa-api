process.env.NODE_ENV = 'test'

import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;

// before(done => {
//   mongoose.connect(config.db.uri);
//   mongoose.connection
//     .once('open', () => done())
//     .on('error', error => console.warn('Error:', error));
// });

// beforeEach(done => mongoose.connection.collections.users.drop(
//   () => {done();console.log('----- CLEANING USERS -----');})
// );

after(done => mongoose.connection.db.dropDatabase(
  () => {
    console.log('---- DROPPING DATABASE ----');
    mongoose.connection.close(done);
  })
);