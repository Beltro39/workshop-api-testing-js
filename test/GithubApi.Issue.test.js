/*
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const { expect } = chai;

let urlRepositories = '';
let repository = '';
let userName = '';
let issueNumber = '';

describe('Consuming POST AND PATCH services', () => {
  it("Check if there's a public repository", async () => {
    const response = await agent.get('https://api.github.com/user')
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.OK);
    const repositoryAux = JSON.parse(response.text);
    expect(repositoryAux.public_repos).to.be.above(0);
    urlRepositories = repositoryAux.repos_url;
    userName = repositoryAux.login;
  });

  it('Selecting one repository', async () => {
    const response = await agent.get(urlRepositories)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json');
    expect(response.status).to.equal(statusCode.OK);
    repository = JSON.parse(response.text).find((element) => element.private === false);
  });

  it('Making an issue', async () => {
    const response = await agent
      .post(`https://api.github.com/repos/${userName}/${repository.name}/issues`)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .send({ title: 'Prueba' });
    expect(response.status).to.equal(statusCode.CREATED);
    issueNumber = JSON.parse(response.text).number;
  });

  it('Finding issue', async () => {
    const response = await agent
      .patch(`https://api.github.com/repos/${userName}/${repository.name}/issues/${issueNumber}`)
      .auth('token', process.env.ACCESS_TOKEN)
      .set('User-Agent', 'request')
      .set('accept', 'application/vnd.github.v3+json')
      .send({ labels: ['testPrueba'] });
    expect(response.status).to.equal(statusCode.OK);
    const responseText = JSON.parse(response.text);
    expect(responseText.title).to.equal('Prueba');
    const aux = responseText.labels.find((element) => element.name === 'testPrueba');
    expect(aux.name).to.equal('testPrueba');
  });
});
*/
