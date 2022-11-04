const express = require('express');
const path = require('path');

let intial_path = path.join(__dirname, "Public")

let app = express();
app.use(express.static(intial_path));

app.get('/', (req, res) => {
  res.sendFile(path.join(intial_path, "index.html"))
})

app.listen(3001, () => {
  console.log('listening on port 3000......');
})
