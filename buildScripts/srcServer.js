import chalk from 'chalk';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config';

/* eslint-disable no-console */

const port = 8089;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(chalk.red(err)); // eslint-disable-line no-console
  } else {
    console.log(chalk.green('Listening...')); // eslint-disable-line no-console
    console.log(chalk.white.bold('Home')); // eslint-disable-line no-console
    console.log(chalk.inverse.white.bold('http://localhost:8089/')); // eslint-disable-line no-console
  }
});
