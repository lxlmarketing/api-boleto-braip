const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

  // ENDPOINTS
  consign({cwd: 'api'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};