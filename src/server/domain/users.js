import { User } from '../models';

const Users = {};

const projection = {
  username: true,
  email: true,
  password: false,
  __v: false
};

const project = 'username email';

Users.getAll = () => User.find({}, project);

Users.findById = id => User.findById(id, project);

Users.saveUser = user => new User(user).save();

export default Users;