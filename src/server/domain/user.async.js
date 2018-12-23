import { User } from '../models';

const Users = {};

Users.getAll = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: err
    };
  }
}

Users.findById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: err
    };
  }
}

Users.saveUser = async (user) => {
  try {
    const res = await new User(user).save();
    return res;
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: err
    };
  }
}

export default user;