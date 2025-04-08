const express = require('express');
const path = require('path');
const userRoutes = require('./pags/pags');

const app = express();
const port = 5000;

const basePath = path.join(__dirname, 'templates');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/pags', userRoutes);

app.get('/pag1', (req, res) => {
  res.sendFile(`${basePath}/pag1.html`);
});
app.get('/pag2', (req, res) => {
    res.sendFile(`${basePath}/pag2.html`);
  });

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
