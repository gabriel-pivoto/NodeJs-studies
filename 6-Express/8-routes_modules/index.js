import express from 'express'
import userRoutes from './users/index.js' // Certifique-se de que o caminho está correto

import path from 'path'
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const basePath = path.join(__dirname, 'templates')

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rotas
app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})
