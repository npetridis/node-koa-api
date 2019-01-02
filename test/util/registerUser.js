import { User } from '../../src/server/models';

const registerUser = user => new User(user).save();

export default registerUser;