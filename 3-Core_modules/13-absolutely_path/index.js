const path = require('path')

console.log(path.resolve('test.txt'))

const midFolder = 'reports'
const fileName = 'gabriel.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)