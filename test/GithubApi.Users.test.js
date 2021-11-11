const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('Consuming services with Query parameters', () => {
  it('Getting 10 users', async () => {
    const response = await agent.get('https://api.github.com/users')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .query({ per_page: '10' });
    expect(response.status).to.equal(statusCode.OK);
    // console.log(JSON.parse(response.text));
    expect(JSON.parse(response.text).length).to.equal(10);
  });
  it('Getting 50 users', async () => {
    const response = await agent.get('https://api.github.com/users')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .query({ per_page: '50' });
    expect(response.status).to.equal(statusCode.OK);
    // console.log(JSON.parse(response.text));
    expect(JSON.parse(response.text).length).to.equal(50);
  });
});
