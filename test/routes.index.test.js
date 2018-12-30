// process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

import { userCompare } from './util';

const should = chai.should();
chai.use(chaiHttp);

const server = require('../src/index');
// import server from '../src';
// console.log('!!!', server)

const testUser = {
  username: 'spongebob',
  password: '12asAS!@#',
  email: 'sponge@bob.com' 
};

describe('Test api', () => {
  
  before(done => {
    done();
  })

  describe('Test auth routes', () => {
    it('should register a user successfully', (done) => {
      // const test = await server;
      // server.then(t => console.log('AAAA',t))
      // console.log('BBBB', server)
      chai.request('localhost:4000')
        .post('/auth/register')
        .send(testUser)
        .end(async (err, res) => {
          should.not.exist(err);
          res.body.status.should.equal('success');
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          const match = await userCompare(res.body.payload, testUser);
          // console.log('========== ', match);
          match.should.eql(true);
          done()
        });
    });
  });

});
