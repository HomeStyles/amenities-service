const express = require('express');
const bodyParser = require('body-parser');
const {Home} = require('../database/index');
const port = 3002;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/amenities/:homeId', (req, res) => { //need to restructure data to have home ID (object ID is separate)
  let query = req.params;
  Home.find(query)
    .then((home) => {
      res.send(home);
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