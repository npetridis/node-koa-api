import bcrypt from 'bcrypt';
import { User } from '../../src/server/models';

const userCompare = async (response, testUser) => {
  const user = await User.find({ username: testUser.username });
  // console.log(testUser.password, user[0].password);
  if (response.email !== user[0].email) return Promise.resolve(false);
  return bcrypt.compare(testUser.password, user[0].password);
};

export default userCompare;
