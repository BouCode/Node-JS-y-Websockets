const express = require('express');

const config = require('./config');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use (router);

router(app);

app.use(config.publicRoute, express.static('public'));

app.listen(config.port);
console.log(`Escuchando en ${config.host}:${config.port}`);
