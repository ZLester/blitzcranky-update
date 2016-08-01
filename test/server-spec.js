const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
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
