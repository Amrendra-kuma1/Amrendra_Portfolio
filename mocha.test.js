const assert = require('chai').assert;
const supertest = require('supertest');
const app = require('./app');  // Update the path based on your app's actual location

describe('Portfolio Website', function () {
  describe('GET /', function () {
    it('should return status 200 and render the home page', function (done) {
      supertest(app)
        .get('/')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          
          // Add more assertions based on your actual response
          assert.isTrue(res.text.includes('Welcome to My Portfolio'));  // Update with your home page content

          done();
        });
    });
  });

  describe('POST /message', function () {
    it('should successfully save a new contact', function (done) {
      supertest(app)
        .post('/message')
        .send({
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Testing',
          message: 'This is a test message'
        })
        .expect(302)  // Assuming your route redirects upon successful submission
        .end(function (err, res) {
          if (err) return done(err);

          // Add assertions based on your application's behavior after form submission
          assert.equal(res.header.location, '/');  // Update with the actual redirect path

          done();
        });
    });

    // Add more tests for different scenarios (e.g., existing contact, validation errors, etc.)
  });

  // Add more tests for other routes as needed

});
