/*
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
const chaiSubset = require('chai-subset');

const { expect } = chai;
chai.use(chaiSubset);

const gist = {
  files: {
    'check.txt': {
      content: 'JUST A SIMPLE TEXT'
    }
  },
  description: 'JUST A SIMPLE DESCRIPTION'
};
let urlGist = '';
let gistID = '';

describe('Consuming DELETE services', () => {
  it('Creating a gist', async () => {
    const response = await agent.post('https://api.github.com/gists')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .send(JSON.stringify(gist));
    expect(response.status).to.equal(statusCode.CREATED);

    const responseText = JSON.parse(response.text);
    urlGist = responseText.url;
    gistID = responseText.id;

    expect(responseText).to.containSubset({
      files: {
        'check.txt': {
          content: 'JUST A SIMPLE TEXT'
        }
      },
      description: 'JUST A SIMPLE DESCRIPTION'
    });
  });

  it('Checking the created gist', async () => {
    const response = await agent.get(urlGist)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.OK);
  });

  it('Deleting the created gist', async () => {
    const response = await agent.delete(`https://api.github.com/gists/${gistID}`)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.NO_CONTENT);
  });
});
*/
