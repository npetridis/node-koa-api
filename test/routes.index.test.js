process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();
chai.use(chaiHttp);

const server = require('../src/index');
// console.log('!!!', server)

describe('routes : index', () => {

  describe('GET /api', () => {
    it('should return json', (done) => {
      chai.request('localhost:4000')
        .get('/api')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.status.should.equal(200);
          res.body.message.should.eql('hello, world!');
          done();
        });
    });
  });

});
