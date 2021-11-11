/*
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

describe('Consuming PUT services', () => {
  it('Start following a user', async () => {
    const response = await agent.put('https://api.github.com/user/following/aperdomob')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.NO_CONTENT);
  });
  it('Checking following users', async () => {
    const response = await agent.get('https://api.github.com/user/following')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.OK);
    const following = JSON.parse(response.text).find((element) => element.login === 'aperdomob');
    expect(following.login).to.equal('aperdomob');
  });
});
*/
