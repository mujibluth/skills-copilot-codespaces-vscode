// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  res.json(comment);
});

// Create comment
app.post('/comments', (req, res) => {
  const { id, author, text } = req.query;
  const newComment = { id: parseInt(id), author, text };
  comments.push(newComment);
  res.json(newComment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { author, text } = req.query;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  comment.author = author;
  comment.text = text;
  res.json(comment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments.splice(index, 1);
  res.json({ message: 'Comment deleted' });
});

// Start web server
app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`);
});

// Run web server
// node comments.js