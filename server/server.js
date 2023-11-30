import express from "express";
const app = express();
const port = 8080;

const coordinatesData = [
  [/* coordinate 1 */],
  [/* coordinate 2 */],
];

app.get('/api/coordinates', (req, res) => {
  res.json(coordinatesData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
