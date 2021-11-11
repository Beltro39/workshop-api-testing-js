/*
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('Consuming HEAD services', () => {
  it('Checking redirection with HEAD service', () => async () => {
    const response = await agent.head('https://github.com/aperdomob/redirect-test')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .ok((res) => res.status === 301);
    expect(response.status).to.equal(statusCode.MOVED_PERMANENTLY);
  });
  it('Checking redirection with GET service', async () => {
    const response = await agent.get('https://github.com/aperdomob/redirect-test')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.redirects).to.be.an('array')
      .that.includes('https://github.com/aperdomob/new-redirect-test');
    // expect(response.redirects).to.not.be.empty;
  });
});
*/
