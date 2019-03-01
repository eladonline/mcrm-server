const mongoose = require('mongoose');
const PostSchema = require('./post_schema');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    validate: {
      validator: name => {
        return name.length > 2;
      },
      message: 'Name should be atleast 3 characters long.'
    }
  },
  likes: Number,
  posts: [PostSchema]
});

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
