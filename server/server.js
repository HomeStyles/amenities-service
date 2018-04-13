const express = require('express');
const bodyParser = require('body-parser');
const {Home} = require('../database/index');
const port = 3002;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/amenities', (req, res) => {
  Home.find()
    .then((homes) => {
      console.log(homes);
      res.send(homes);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});