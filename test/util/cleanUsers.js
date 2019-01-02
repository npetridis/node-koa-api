import mongoose from 'mongoose';

// beforeEach(done => mongoose.connection.collections.users.drop(
//   () => done())
// );

const cleanUsers = () => mongoose.connection.collections.users.drop();

export default cleanUsers;