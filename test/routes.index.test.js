// process.env.NODE_ENV = 'test';
import mongoose from 'mongoose';

import chai from 'chai';
import chaiHttp from 'chai-http';

import {
  userCompare,
  registerUser,
  cleanUsers
} from './util';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

const server = require('../src/index');
// import server from '../src';
// console.log('!!!', server)

const validRegisterData = {
  username: 'spongebob',
  password: '12asAS!@#',  // valid password format
  email: 'sponge@bob.com'
};

const invalidRegisterData = {
  password: '12asAS!@#',
  email: 'sponge@bob.com'
};

const validLoginData = {
  username: validRegisterData.username,
  password: validRegisterData.password
}

describe('Test auth api', () => {

  // after(done => {
  //   console.log('----- CLEANING USERS -----');
  //   // registerUser(validRegisterData);
  //   cleanUsers().then(() => done());
  //   // done();
  // });

  describe('Test user register', () => {
    
    // beforeEach(done => cleanUsers.then(() => done()));
    
    it('should register a user successfully', done => {
      // const test = await server;
      // server.then(t => console.log('AAAA',t))
      // console.log('BBBB', server)
      chai.request('localhost:4000')
        .post('/auth/register')
        .send(validRegisterData)
        .end(async (err, res) => {
          should.not.exist(err);
          res.body.status.should.equal('success');
          res.status.should.eql(201);
          res.type.should.eql('application/json');
          const match = await userCompare(res.body.payload, validRegisterData);
          match.should.eql(true);
          done();
        });
    });
    
    it('should fail to register an invalid request', done => {
      chai.request('localhost:4000')
        .post('/auth/register')
        .send(invalidRegisterData)
        .end(async (err, res) => {
          should.not.exist(err);
          res.body.status.should.equal('error');
          res.status.should.eql(403);
          res.type.should.eql('application/json');
          // console.log(res.body);
          done();
        });
    });
  });
  
  describe('Test user login', () => {
    
    // before(done => {
    //   console.log('----- CLEANING USERS -----');
    //   // registerUser(validRegisterData);
    //   cleanUsers().then(() => done());
    //   // done();
    // });
    before(done => mongoose.connection.collections.users.drop(
      () => {done();console.log('----- CLEANING USERS -----');})
    );
    
    before(done => {
      console.log('----- REGISTER USER -----');
      registerUser(validRegisterData)
        .then(() => done());
    });
    
    it('should login a user successfully', done => {
      // const test = await server;
      // server.then(t => console.log('AAAA',t))
      console.log({validRegisterData});
      console.log({validLoginData});
      // console.log('BBBB', server)
      chai.request('localhost:4000')
        .post('/auth/login')
        .send(validLoginData)
        // .redirects(0)
        .end((err, res) => {
          expect(res).to.redirectTo('/auth/status');
          // should.not.exist(err);
          // console.log(res);
          // res.redirect(302, '/auth/status');
          // console.log(res.body);
          res.status.should.eql(302);
          // res.body.status.should.equal('success');
          // res.body.message.should.eql(/'User is authenticated')
          // res.type.should.eql('application/json');
          // const match = await userCompare(res.body.payload, validRegisterData);
          // console.log('========== ', match);
          // match.should.eql(true);
          // done();
        })
        // .get('/auth/status')
        // .end((err, res) => {
        //   res.status.should.eql(200);
        //   res.body.status.should.equal('success');
        //   res.body.message.should.eql('User is authenticated');
        //   done();
        // });
    });
    
  });
  
});
