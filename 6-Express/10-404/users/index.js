import express from 'express'
var router = express.Router()

import path from 'path'
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)
})

// antes do /
router.get('/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`)
})

export default router;