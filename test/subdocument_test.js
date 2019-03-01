const assert = require('assert');
const User = require('../src/user');

describe('subdocuments', () => {
  it('create subdocument', done => {
    const joe = new User({ name: 'Joe', posts: [{ title: 'my new subdocument' }] });

    joe.save().then(() => {
      User.findOne({ name: 'Joe' }).then(user => {
        assert(user.posts[0].title === 'my new subdocument');
        done();
      });
    });
  });
  it('add new post to subdocument', done => {
    const joe = new User({
      name: 'Joe',
      posts: []
    });
    joe
      .save()
      .then(() => {
        return User.findOne({ name: 'Joe' }).then(user => {
          user.posts.push({ title: 'new post' });
          return user.save();
        });
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.posts[0].title === 'new post');
        done();
      });
  });
  it('remove post of subdocument', done => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'post' }]
    });
    joe.save().then(() => {
      return User.findOne({ name: 'Joe' })
        .then(user => {
          const post = user.posts[0];
          post.remove();
          return user.save();
        })
        .then(() => {
          return User.findOne({ name: 'Joe' }).then(user => {
            assert(!user.posts.lenght);
            done();
          });
        });
    });
  });
});
