const request = require('supertest');
const express = require('express');
const app = require('../server/app.js');

describe('GET request should return 200 status code', () => {
  test('It should send a response to GET method', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Should handle a POST request', () => {
  test('POST request should send a response', (done) => {
    request(app).post('/amenities/form').then((response) => {
      expect(response.text).toBe('New entry added to the database');
      done();
    });
  });
});