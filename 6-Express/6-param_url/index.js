import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id
  
  console.log(`Estamos buscando pelo usuário: ${id}`)
  res.sendFile(`${basePath}/index.html`);

});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
