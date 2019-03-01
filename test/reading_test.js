const assert = require('assert');
const User = require('../src/user');

describe('reading users out of the DB', () => {
  let joe;
  beforeEach(done => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => {
      done();
    });
  });
  it('finds all users with the name joe', done => {
    User.find({ name: 'Joe' }).then(users => {
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });
  it('find a user with id', done => {
    User.findOne({ _id: joe._id }).then(user => {
      assert(user.name === 'Joe');
      done();
    });
  });
});
