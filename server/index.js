require('dotenv').config({path:'./.env.local'});
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const pg = require('pg');

//let response={};

//let client = new pg.Client(conString);

const pool = new pg.Pool({connectionString: process.env.CONSTRING})

app.get('/route_clients', (req, res) => {
        pool.query('SELECT * FROM  CLIENTS ', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          console.log(result.rows);
          res.send(result.rows);
        });
});

app.listen(3000, () => console.log('GO Spurs GO'));




