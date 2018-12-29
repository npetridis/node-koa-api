import mongoose from 'mongoose';

const connectDatabase = uri => new Promise((resolve, reject) => {
  mongoose.connection
    .on('error', error => reject(error))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => resolve(mongoose.connections[0]));

  mongoose.connect(uri);
});

export default connectDatabase;
