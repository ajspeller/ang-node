const express = require('express');
const path = require('path');
const app = express();

// get our custom routes
const posts = require('./server/routes/posts');

// using middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);

// catch all routes and return the index.html in the dist folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.port || 4600;

app.listen(port, (req, res) => {
  console.log(`Server started on port ${port} ...`);
});
