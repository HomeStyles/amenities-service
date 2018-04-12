const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();

app.use(express.static(__dirname + '../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('GET request received');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});