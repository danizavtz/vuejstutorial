process.env.NODE_ENV = 'test'
const fs = require('fs')
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../index')
const server = app.listen()
const api = supertest(server)

describe('#TODO', function() {
  describe('GET', function() {
    it('Check get return empty array', function(done) {
      api.get('/todos')
        .set('Accept', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.equal('[]')
          done();
        });
    });
    it('Check undefined route does not exist', function(done) {
      api.get('/todos' + undefined)
        .set('Accept', 'application/json; charset=utf-8')
        .expect(404)
        .end(function(err, res) {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it('Check home page', function(done) {
      api.get('/todos')
        .set('Accept', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          expect(res.status).to.equal(200);          
          done();
        });
    });
  });
});