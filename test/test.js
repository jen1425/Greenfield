var expect = require('chai').expect;
var app = require('../server/app.js');
var fs = require('fs');
var path = require('path');
var supertest = require('supertest');

var request = supertest.agent(app.app);

describe('GET /filter', function () {
 it('should return 200 status code', function (done) {
   request
       .get('/filter')
       .expect(200, done);
 });

 it('should return an object', function(done) {
   request
   .get('/filter')
   .expect(200, function(error, response) {
     expect(response).to.be.an('object');
     done();
   });
 });

 it('should return a parseable body', function(done) {
   request
   .get('/filter')
   .expect(200, function(error, response) {
     expect(JSON.parse.bind(this, response.text)).to.not.throw();
     done();
   });
 });

 it('main body should be an array', function(done) {
   request
   .get('/filter')
   .expect(200, function(error, response) {
     expect(JSON.parse(response.text)).to.be.an('array');
     done();
   });
 });

 it('should apply filters correctly', function(done) {
    this.timeout(15000);
   request
   .get('/filter?username=monaberry&duration=120000')
   .expect(200, function(error, response) {
     expect(JSON.parse(response.text)[0].origin.user.username).to.equal('monaberry');
     expect(JSON.parse(response.text)[0].origin.duration).to.be.above(120000);
     done();
     setTimeout(done, 150000);
   });
 });
});

