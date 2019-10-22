const express = require('express');
const app = express();
const env = require('get-env')();
const brouter = require('./blogs');
const mongoose = require('mongoose');
const blogSchema = require('./blogSchema');

const Blog = mongoose.model('Blog', blogSchema);

let myBlog = new Blog(
  { title: String, author: String, body: String },
  { collection: 'Blog' }
);

app.use(brouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}!`));

mongoose
  .connect('mongodb+srv://blava123:blava123@cluster0-po9fd.mongodb.net/Blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => {
    console.log(error);
    handleError(error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected....');

  Blog.find({ author: 'blava' }, (err, blo) => {
    console.log(blo);
  });
});
