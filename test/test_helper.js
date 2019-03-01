const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/users_test',
  { useNewUrlParser: true }
);
mongoose.connection
  .once('open', () => console.log('gtg'))
  .on('error', error => console.warn('warning', error));


// clean dataBase before every loop
beforeEach((done) => {
  mongoose.connection.collections.users.drop(()=>{
    // ready to run the next test!
    done()
  });
});
