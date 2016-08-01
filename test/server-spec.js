const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const app = require('../server.js');

chai.use(chaiHttp);

describe('Server Functionality', () => {

  it('should exist', () => {
    expect(app).to.exist;
  });

  it('should run in development when testing', () => {
    expect(app.settings.env).to.equal('development');
  });
});
