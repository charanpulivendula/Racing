// import express from "express";
// const app = express();
// const port = 8080;

// const coordinatesData = [
//   [/* coordinate 1 */],
//   [/* coordinate 2 */],
// ];

// app.get('/api/coordinates', (req, res) => {
//   res.json(coordinatesData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 8080;

app.use(express.json());

app.get('/api/coordinates', (req, res) => {
  const coordinates = [];

  fs.createReadStream('monza_centerline.csv')
    .pipe(csv(['track_progress', 'x_m', 'y_m', 'w_tr_right_m', 'w_tr_left_m']))
    .on('data', (row) => {
      coordinates.push([parseFloat(row.x_m), parseFloat(row.y_m)]);
    })
    .on('end', () => {
      res.json(coordinates);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
