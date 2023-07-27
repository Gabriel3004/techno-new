const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const pg = require('pg');

//let response={};
const conString = "postgres://hshesqpi:uik98TItf95stO6uUeiBjkQstgYraGZH@horton.db.elephantsql.com/hshesqpi" ;
//let client = new pg.Client(conString);



app.get('/route_clients', (req, res) => {
    let response={};
    let client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
          return console.error('could not connect to postgres', err);
        }
        client.query('SELECT * FROM  CLIENTS ', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          response=result.rows;
          console.log(result.rows);
          res.send(response);
          client.end();
        });
      }); 
  
});

app.listen(3000, () => console.log('GO Spurs GO'));


export 

