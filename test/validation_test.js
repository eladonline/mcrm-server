const assert = require('assert');
const User = require('../src/user');

describe('vlidating records', () => {
  it('requires a user name', () => {
    const user = new User({ name: '' });
    const validationResults = user.validateSync();
    const { message } = validationResults.errors.name;
    assert(message === 'Name is required.');
  });
  it('requires a user name longer then 2 characters', () => {
    const user = new User({ name: 'Al' });
    const validationResults = user.validateSync();
    const { message } = validationResults.errors.name;
    assert(message === 'Name should be atleast 3 characters long.');
  });
  it('disallow invalid record being saved', (done) => {
    const user = new User({ name: 'Al' });
    user.save().catch(validationResults => {
      const { message } = validationResults.errors.name;
      assert(message === 'Name should be atleast 3 characters long.');
      done()
    });
  });
});
