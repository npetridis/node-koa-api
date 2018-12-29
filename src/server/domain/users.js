import { User } from '../models';

const Users = {};

const project = 'username email';

Users.getAll = () => User.find({}, project);

Users.findById = id => User.findById(id, project);

Users.saveUser = user => new User(user).save();

export default Users;
