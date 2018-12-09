process.env.NODE_ENV = 'test'
const fs = require('fs')
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../index')
const server = app.listen()
const api = supertest(server)

describe('#HOME', function() {
  describe('GET', function() {
    it('Check get route does not exist', function(done) {
      api.get('/login/')
        .set('Accept', 'application/json; charset=utf-8')
        .expect(404)
        .end(function(err, res) {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it('Check undefined route does not exist', function(done) {
      api.get('/' + undefined)
        .set('Accept', 'application/json; charset=utf-8')
        .expect(404)
        .end(function(err, res) {
          expect(res.status).to.equal(404);
          done();
        });
    });
    it('Check home page', function(done) {
      api.get('/')
        .set('Accept', 'application/json; charset=utf-8')
        .expect(200)
        .end(function(err, res) {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.equal("Server up and running")
          done();
        });
    });
  });
});