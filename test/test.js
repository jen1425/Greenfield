var expect = require('chai').expect;
var app = require('../server/app.js').app;
var fs = require('fs');
var path = require('path');
var supertest = require('supertest');

var request = supertest.agent(app);

describe('GET /filter', function () {
  var response = {};


  beforeAll(function(done) {

    // runs before all tests in this block
    request
    .get('/filter')
    .end(function(err, res) {
      response = res;
      done();
    });
  });

  it('should return 200 status code', function() {
    expect(response.statusCode).to.equal(200);
  });

  it('should return an object', function() {
    expect(response).to.be.an('object');
  });

  it('should return a parseable body', function() {
    expect(JSON.parse.bind(this, response.text)).to.not.throw();
  });
  
  it('main body should be an array', function() {
    expect(JSON.parse(response.text)).to.be.an('array');
  });

});

describe('GET /filter?', function() {
  it('should apply filters correctly', function(done) {
    request
   .get('/filter?username=monaberry&duration=120000')
   .timeout(15000)
   .expect(200, function(error, response) {
     expect(JSON.parse(response.text)[0].origin.user.username).to.equal('monaberry');
     expect(JSON.parse(response.text)[0].origin.duration).to.be.above(120000);
     done();
   });
  });
});

describe ('GET /feed', function() {
  var response;
  beforeAll(function(done) {
    request
    .get('/feed?id=372')
    .end(function(err, res) {
      response = res;
      done();
    });
  });

  it('should return 200 status code', function() {
    expect(response.statusCode).to.equal(200);
  });

  it('should return an object', function() {
    expect(response).to.be.an('object');
  });

  it('should return a parseable body', function() {
    expect(JSON.parse.bind(this, response.text)).to.not.throw();
  });

  it('main body should be an array', function() {
    expect(JSON.parse(response.text)).to.be.an('array');
  });

  it('should return the correctly filtered feed', function() {
    expect(JSON.parse(response.text)[0].origin.user.username).to.equal('monaberry');
  });

});







