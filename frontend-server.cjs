const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor Frontend en puerto 3000');
});

app.listen(3000, () => {
  console.log('Frontend Server en http://localhost:3000');
});