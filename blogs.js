const express = require('express');
const brouter = express.Router();

brouter.get('/blogs', function(req, res) {
  res.send('GET All blogs');
});

// POST method route
brouter.post('/blogs', function(req, res) {
  res.send('POST a blog');
});

brouter.get('/blogs/:id', function(req, res) {
  res.send('GET single blog');
});

brouter.put('/blogs/:id', function(req, res) {
  res.send('Update a blog');
});

brouter.delete('/blogs/:id', function(req, res) {
  res.send('Delete a blog');
});

module.exports = brouter;
