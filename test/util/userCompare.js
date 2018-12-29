// import bcrypt from 'bcrypt';

const userCompare = (response, testUser) => {
  Object.entries(response).forEach(([key, value]) => console.log(key, value));
  return true;
};

export default userCompare;
