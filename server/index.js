require('dotenv').config({path:'./.env.local'});
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const pg = require('pg');

const pool = new pg.Pool({connectionString: process.env.CONSTRING})

app.get('/route_articles', (req, res) => {
        pool.query('SELECT * FROM ARTICLES', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          console.log(result.rows);
          res.send(result.rows );
        });
});

app.listen(3000, () => console.log('Lo tengo Baby'));




