const express = require ('express');

const bodyParser = require ('body-parser');
const db = require ('./db');
const router = require ('./network/routes');

db ('mongodb+srv://empire:4V4XyMh8nK4sjJ2@cluster0-4m1ii.gcp.mongodb.net/test?retryWrites=true&w=majority');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// app.use (router);

router(app);

app.use ('/app', express.static ('public'));


app.listen (3000);
console.log ('http://localhost:3000')