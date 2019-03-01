const assert = require('assert');
const User = require('../src/user');

describe('update DB', () => {
  let joe;
  beforeEach(done => {
    joe = new User({ name: 'Joe', likes: 0 });
    joe.save().then(() => {
      done();
    });
  });
  it('instance type using set and save', done => {
    joe.set('name', 'Alex');
    joe.save().then(() => {
      User.find({}).then(users => {
        assert(users[0].name === 'Alex');
      });
      done();
    });
  });


  // class
  it('class type update one record', done => {
    User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }).then(() => {
      User.find({}).then(users => {
        assert(users[0].name === 'Alex');
      });
      done();
    });
  });
  it('class type update one record by id', done => {
    User.findByIdAndUpdate(joe._id, { name: 'Alex' }).then(() => {
      User.find({}).then(users => {
        assert(users[0].name === 'Alex');
      });
      done();
    });
  });

  it('increment post count by 1', done => {
    User.updateMany({ name: 'Joe' }, { $inc: { likes: 1 } }).then(() => {
      User.find({}).then(users => {
        assert(users[0].likes > 0);
      });
      done();
    });
  });
});
