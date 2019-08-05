const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/messages', (req, res) => {
    console.log('GET /messages');
    pool.query('SELECT * from "messages";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /messages', error)
        res.sendStatus(500);
    });
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});