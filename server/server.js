const express = require('express');
const coordinatesData = require('./Austin.json');
const app = express();
const port = 8080;
const cors = require('cors')

app.use(cors())

app.get('/api/coordinates', (req, res) => {
  res.json(coordinatesData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
