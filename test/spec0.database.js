process.env.NODE_ENV = 'test';
const expect = require('chai').expect
const supertest = require('supertest')
const mongoose = require('mongoose')
const fs = require('fs');

describe('#DATABASE', function() {
  describe('CONNECTION ERROR', function() {
    it('Should return database not found', function(done) {
      mongoose.connect('', function(err) {
        err = JSON.parse(JSON.stringify(err));        
        done();
      });
    });
  });
});