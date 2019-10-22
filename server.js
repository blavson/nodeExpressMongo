const express = require('express');
const app = express();
//const env = require('get-env')();
const brouter = require('./blogs');
const mongoose = require('mongoose');
const blogSchema = require('./blogSchema');
const Blog = mongoose.model('blog', blogSchema);

let myBlog = new Blog(
  { title: String, author: String, body: String },
  { collection: 'blog' }
);

app.use(brouter);
const port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () =>
  console.log(`Example app listening on port ${port}!`)
);

mongoose.connect(
  'mongodb+srv://blava123:blava123@blavasclusta-po9fd.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  Blog.findOne({ type: 'articles' }, (err, adventure) => {
    if (err) {
      console.log('Some shit happened');
    } else {
      const b = Blog.findOne({ author: 'Mikheil Blavatsky' });
      // console.log(b);
    }
  });
});
