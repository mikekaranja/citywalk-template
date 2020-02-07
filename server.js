const express = require('express');// eslint-disable-line
const path = require('path');
const serveStatic = require('serve-static');// eslint-disable-line

const app = express();
app.use(serveStatic(path.join('dist')));
const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started: ', port); // eslint-disable-line