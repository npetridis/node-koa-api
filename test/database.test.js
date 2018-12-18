// process.env.NODE_ENV = 'test';
// 
// import chai from 'chai';
// import { User } from '../src/server/models';
// 
// describe('Sample Test', () => {
//   it('should pass', (done) => {
//     const sum = 1 + 2;
//     sum.should.eql(3);
//     sum.should.not.eql(4);
//     done();
//   });
// 
//   it('Saves a user', done => {
//     const dummyUser = {
//       firstName: 'David',
//       lastName: 'Copperfield',
//       dob: new Date('16/09/1956')
//     };
// 
//     const newUser = new User(dummyUser);
//     newUser.save()
//       .then(() => {
// 
//         done();
//       })
//   })
// });