const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Home} = require('../database/index');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/amenities/:homeId', (req, res) => {
  let query = req.params;
  Home.find(query)
    .then((home) => {
      res.send(home[0]);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.post('/amenities/form', (req, res) => {
  let entry = req.body;
  Home.create(req.body);
  res.send('New entry added to the database');
});

module.exports = app;