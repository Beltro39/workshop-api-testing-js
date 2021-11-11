// const fs = require('fs');
// import { readFile } from 'fs';
/*
const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
const chaiSubset = require('chai-subset');

chai.use(chaiSubset);
const NodeGit = require('nodegit');

let userRepositories = '';
let cloneUrlRepository = '';
let urlRepository = '';
const { expect } = chai;

describe('Consuming GET services', () => {
  it('Checking github user', async () => {
    const response = await agent.get('https://api.github.com/users/aperdomob')
      .set('User-Agent', 'request');
    expect(response.status).to.equal(statusCode.OK);
    userRepositories = JSON.parse(response.text).repos_url;
  });
  it('Checking github user specefic repository', async () => {
    const response = await agent.get(userRepositories)
      .set('User-Agent', 'request');
    expect(response.status).to.equal(statusCode.OK);
    const repository = JSON.parse(response.text).find((element) =>
    element.name === 'jasmine-awesome-report');
    expect(repository.full_name).to.equal('aperdomob/jasmine-awesome-report');
    expect(repository.private).to.equal(false);
    expect(repository.description).to.equal('An awesome html report for Jasmine');
    urlRepository = repository.url;
    cloneUrlRepository = repository.clone_url;
  });
  it('Cloning github repository', async () => {
    const cloneURL = cloneUrlRepository;
    const localPath = 'test/repositories/1';
    const cloneOptions = {};
    await NodeGit.Clone(cloneURL, localPath, cloneOptions);
  });
  it('Verifying README.md file', async () => {
    const response = await agent.get(`${urlRepository}/git/trees/master?recursive=1`)
      .set('User-Agent', 'request');
    const data = JSON.parse(response.text);
    const readMe = data.tree.find((record) => record.path === 'README.md');
    expect(readMe).to.containSubset({
      path: 'README.md',
      sha: '1eb7c4c6f8746fcb3d8767eca780d4f6c393c484'
    });
  });
});
*/
