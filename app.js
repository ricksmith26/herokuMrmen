const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');


app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + 'public'));

app.use('/api', apiRouter);

app.use('/*', (req, res, next) => {
  res.status(404).send({ msg: 'Page not found' });
});

app.use((err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else res.status(500).send({ msg: 'Internal server error', err });
});

module.exports = app;
